import express from 'express'
import cors from 'cors'
import authRouter from './src/routers/authRouter.js'
import accessRouter from './src/routers/accessRouter.js'
const app = express()
app.use(express.json())
app.use(cors());

app.use('/api', authRouter)
app.use('/api', accessRouter)

export default app