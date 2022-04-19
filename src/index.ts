import express, {Request, Response, NextFunction} from 'express'
import bodyParser from 'body-parser'
import {runDb} from './repositories/db'
import {authRouter} from './routes/auth/auth-router'
import {usersRouter} from './routes/users/users-router'
import {feedbacksRouter} from './routes/feedbacks/feedbacks-router'

// create express app
const app = express()

const jsonBodyMiddleware = bodyParser.json()
app.use(jsonBodyMiddleware)

const port = process.env.PORT || 5000

app.use('/users', usersRouter)
app.use('/auth', authRouter)
app.use('/feedbacks', feedbacksRouter)

const startApp = async () => {
    await runDb()
    app.listen(port, () => {
        console.log(`App started: ${port}`)
    })
}

startApp()
