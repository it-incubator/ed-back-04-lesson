import {NextFunction, Request, Response} from 'express'

export const superAdminAuthMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    // check Basic auth for login/pass pair: superadmin/12345
    res.send(401)
}
