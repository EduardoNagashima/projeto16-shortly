import db from "../db.js";
import { customAlphabet } from 'nanoid';

export async function postUrl(req, res){
    const {user} = res.locals;
    const {url} = req.body;
    const nanoid = customAlphabet('1234567890abcdef', 8);
    const shortUrl = nanoid(url);
    await db.query(`
        INSERT INTO usersLinks("userId", "completeLink","shortLink") 
        VALUES ($1, $2, $3);
    `,[user.id, url, shortUrl]);
    const obj = {
        shortUrl
    }
    res.status(201).send(obj)
}