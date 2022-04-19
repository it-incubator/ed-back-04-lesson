import {Request, Response, Router} from 'express'
import {usersService} from '../../domain/users-service'

export const usersRouter = Router({})

usersRouter.post('/',
    async (req: Request, res: Response) => {
        const newProduct = await usersService.createUser(req.body.login, req.body.email, req.body.password)
        res.status(201).send(newProduct)
    })

usersRouter.get('/', async (req: Request, res: Response) => {
    const users = await usersService
        .getAllUsers()
    res.send(users)
})
