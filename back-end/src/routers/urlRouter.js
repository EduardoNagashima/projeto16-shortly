import { Router } from "express";

import authRouter from "./../middlewares/authRouter.js";

const urlRouter = Router();

urlRouter.post("/urls/shorten", authRouter, postUrl);
urlRouter.get("/urls/:id", getUrlId);
urlRouter.get("/urls/open/:shortUrl", getShortUrl);
urlRouter.delete("/urls/shorten", deleteUrl);

export default urlRouter;