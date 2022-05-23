import express from 'express'
import {runDb} from './repositories/db'
import {authRouter} from './routes/auth/auth-router'
import {adminsRouter} from './routes/admins/admins-router'
import {feedbacksRouter} from './routes/feedbacks/feedbacks-router'

const app = express()
app.use(express.json())

const port = process.env.PORT || 5000

app.use('/admins', adminsRouter)
app.use('/auth', authRouter)
app.use('/feedbacks', feedbacksRouter)

const startApp = async () => {
    await runDb()
    app.listen(port, () => {
        console.log(`App started: ${port}`)
    })
}

startApp()
