import express from 'express'
import authRouter from './src/routers/authRouter.js'
import accessRouter from './src/routers/accessRouter.js'
const app= express()
app.use(express.json())

app.use('/api',authRouter)
app.use('/api',accessRouter)

export default app