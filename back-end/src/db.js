import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const {Pool} = pg;
let db;

try{
    db = new Pool({
        connectionString: process.env.DATABASE_URL,
    });
} catch (e){
    console.log("Erro ao se conectar com o BD ", e);
}

export default db;