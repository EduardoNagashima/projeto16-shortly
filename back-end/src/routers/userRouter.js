import {Router} from "express";

import {signup, signin, getUsers, getRanking} from "./../controllers/usersController.js";

const userRouter = Router();

userRouter.post('/signup', signup);
userRouter.post('/signin', signin);
userRouter.get('/users/:id', getUsers);
userRouter.get('/users/ranking', getRanking);

export default userRouter;