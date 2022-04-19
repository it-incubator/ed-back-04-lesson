import {Request, Response, Router} from 'express'
import {usersService} from '../../domain/users-service'

export const authRouter = Router({})

authRouter.post('/login',
    async (req: Request, res: Response) => {
        const checkResult: boolean = await usersService.checkCredentials(req.body.loginOrEmail, req.body.password)
        if (checkResult) {
            res.status(201).send(checkResult)
        } else {
            res.sendStatus(401)
        }
    })
