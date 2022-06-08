import express from "express";
import dotenv from "dotenv";

const app = express();

app.get("/teste", (req, res)=>{
    res.send("Teste!");
});

app.listen(process.env.PORT);