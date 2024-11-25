import express from 'express'
import cors from 'cors'
import authRouter from './src/routers/authRouter.js'
import accessRouter from './src/routers/accessRouter.js'
const app = express()
app.use(express.json())
app.use(cors({
    origin: 'https://rbac-web.vercel.app/', 
    methods: ['GET', 'POST'],
    credentials: true,
}));
app.use('/api', authRouter)
app.use('/api', accessRouter)

export default app