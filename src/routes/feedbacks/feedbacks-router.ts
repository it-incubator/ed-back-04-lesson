import {Router} from 'express'
import {usersService} from '../../domain/users-service'
import {authMiddleware} from '../../middlewares/auth-middleware'
import {feedbacksService} from '../../domain/feedbacks-service'

export const feedbacksRouter = Router({})

feedbacksRouter
    .post('/', authMiddleware,
        async (req, res) => {
            const newProduct = await feedbacksService.sendFeedback(req.body.comment, req.user!._id)
            res.status(201).send(newProduct)
        })
    .get('/', async (req, res) => {
        const users = await usersService
            .getAllUsers()
        res.send(users)
    })
