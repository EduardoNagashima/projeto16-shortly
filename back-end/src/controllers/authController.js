import joi from "joi";
import {v4} from "uuid";
import bcrypt from "bcrypt";

import db from "./../db.js";

const userSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    confirmPassword: joi.ref('password')
});

export async function signup(req, res){
    //VALIDAÇÃO COM JOI, COLOCAR EM UM MIDDLEWARE!
    const user = req.body;
    const {password, email, name} = user;

    const {error} = userSchema.validate(user);

    if (error) {
        return res.status(422).send(error.details);
    }

    try{
        const validEmail = await db.query(`
        SELECT * FROM users 
        WHERE email = $1;
        `, [email]);
    
        if (validEmail.rowCount > 0){
            return res.status(422).send('Email já cadastrado!');
        }

        const cryptoPassword = bcrypt.hashSync(password, 10);

        await db.query(`
        INSERT INTO users ("name", "email", "password") 
        VALUES ($1, $2, $3);
        `,[name, email, cryptoPassword]);
        console.log('entrou')
        return res.sendStatus(201);
    } catch (e){
        console.log(e);
        return res.status(500).send('Erro ao comunicar com o banco');
    }

}

export async function signin(req, res){
    const {email, password} = req.body;

    if (!email || !password) {
        return res.status(422).send('email ou senha não informados');
    }

    try{
        
        const userInfo = await db.query(`
            SELECT * FROM users
            WHERE email = $1
        `,[email]);
    
        if (userInfo.rowCount > 0 && bcrypt.compareSync(password, userInfo.rows[0].password)){
            const token = v4();

            await db.query(`
            INSERT INTO sessions (token, "userId")
            VALUES ($1, $2)
            `,[token, userInfo.rows[0].id]);

            return res.status(200).send(token);


        } else {
            return res.status(401).send('Email e/ou senha inválidos');
        }
        

    } catch (e) {
        console.log(e);
        return res.status(500).send('Erro ao comunicar com o banco');
    }
}