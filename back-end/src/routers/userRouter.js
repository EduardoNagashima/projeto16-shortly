import {Router} from "express";

import {getUsers, getRanking} from "./../controllers/usersController.js";

const userRouter = Router();

userRouter.get('/users/:id', getUsers);
userRouter.get('/users/ranking', getRanking);

export default userRouter;