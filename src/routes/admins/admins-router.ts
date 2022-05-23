import {Request, Response, Router} from 'express'
import {adminsService} from '../../domain/admins-service'
import {superAdminAuthMiddleware} from '../../middlewares/superadmin-auth-middleware'

export const adminsRouter = Router({})

adminsRouter
    .use(superAdminAuthMiddleware)
    .get('/', async (req: Request, res: Response) => {
        const users = await adminsService
            .getAllAdmins()
        res.send(users)
    })
    .post('/',
        async (req: Request, res: Response) => {
            const newUser = await adminsService.create(req.body.name, req.body.email, req.body.password)
            res.status(201).send(newUser)
        })
