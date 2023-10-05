import {Request, Response, Router} from 'express'
import {adminAuthMiddleware} from '../../middlewares/admin-auth-middleware'
import {feedbacksService} from '../../domain/feedbacks-service'

export const feedbacksRouter = Router({})

feedbacksRouter
    .post('/', adminAuthMiddleware,
        async (req: Request, res: Response) => {
            const newProduct = await feedbacksService.sendFeedback(req.body.comment, req.admin!._id)
            res.status(201).send(newProduct)
        })
    .get('/', async (req, res) => {
        const users = await feedbacksService
            .allFeedbacks()
        res.send(users)
    })
