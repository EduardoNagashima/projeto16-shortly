import express from "express";

const app = express();

app.get("/teste", (req, res)=>{
    res.send("Teste!");
});

app.listen(4000);