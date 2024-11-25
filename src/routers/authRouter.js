import express from 'express';
import { userLogin, Register } from '../controllers/authController.js';
const authRouter = express.Router()


authRouter.post('/user/register', Register)
authRouter.post('/user/login', userLogin)

export default authRouter;
