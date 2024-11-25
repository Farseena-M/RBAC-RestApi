import express from 'express';
import { adminPage, ModeratorPage, userPage } from '../controllers/authController.js';
import protect from '../middlewares/protect.js';
import restrict from '../middlewares/role.js';
const accessRouter = express.Router()


accessRouter.get('/user',protect,restrict(['User']), userPage)
accessRouter.get('/admin',protect,restrict(['Admin']), adminPage)
accessRouter.get('/moderator',protect,restrict(['Moderator']), ModeratorPage)

export default accessRouter;
