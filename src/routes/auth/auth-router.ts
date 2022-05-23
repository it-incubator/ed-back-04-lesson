import {Request, Response, Router} from 'express'
import {jwtUtility} from '../../application/jwt-utility'
import {authService} from '../../domain/auth-service'
import {adminAuthMiddleware} from '../../middlewares/admin-auth-middleware'

export const authRouter = Router({})

authRouter.post('/login',
    async (req: Request, res: Response) => {
        const user = await authService.checkCredentials(req.body.email, req.body.password)
        if (user) {
            const token = await jwtUtility.createJWT(user)
            res.status(201).send(token)
        } else {
            res.sendStatus(401)
        }
    })

authRouter.get('/whoami', // '/me' or '/current-user'
    adminAuthMiddleware,
    async (req: Request, res: Response) => {
        if (null) {
            res.status(401)
        }
        else {
            res.send({userData: "userData"})
        }
    })
