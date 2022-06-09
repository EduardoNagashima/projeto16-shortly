import { Router } from "express";

import {authMiddleware} from "./../middlewares/authMiddleware.js";
import {postUrl, getUrlId, convertUrl} from "./../controllers/urlController.js";

const urlRouter = Router();

urlRouter.post("/urls/shorten", authMiddleware, postUrl);
urlRouter.get("/urls/:id", getUrlId);
urlRouter.get("/urls/open/:shortUrl", convertUrl);
// urlRouter.delete("/urls/shorten", authMiddleware, deleteUrl);

export default urlRouter;