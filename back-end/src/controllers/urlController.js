import db from "../db.js";
import { customAlphabet } from 'nanoid';

export async function postUrl(req, res){
    const {user} = res.locals;
    const {url} = req.body;
    const nanoid = customAlphabet('1234567890abcdef', 8);
    const shortUrl = nanoid(url);
    console.log(user.rows[0].id)
    try{
        await db.query(`
        INSERT INTO "usersLinks"("fullLink","shortLink", "userId") VALUES ($1, $2, $3);
        `,[url, shortUrl, user.rows[0].id]);
        const obj = {
            shortUrl
        }
        res.status(201).send(obj);
    } catch (e){
        console.log(e);
        return res.status(500).send('Não foi possível se conectar com o BD')
    }
}