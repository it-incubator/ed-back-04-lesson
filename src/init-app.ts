import express from 'express';
import {adminsRouter} from './routes/admins/admins-router';
import {authRouter} from './routes/auth/auth-router';
import {feedbacksRouter} from './routes/feedbacks/feedbacks-router';

export const app = express()
export const port = process.env.PORT || 5000

app.use(express.json())

app.use('/admins', adminsRouter)
app.use('/auth', authRouter)
app.use('/feedbacks', feedbacksRouter)
app.use('/hello', (req, res) => {
    res.send('hello')
})