import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const {Pool} = pg;
let db;

const user = 'postgres';
const password = '123456';
const host = 'localhost';
const port = 5432;
const database = 'projeto16';

try{
    db = new Pool({
        user,
        password,
        host,
        port,
        database
    });
} catch (e){
    console.log("Erro ao se conectar com o BD ", e);
}

export default db;