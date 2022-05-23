import {NextFunction, Request, Response} from 'express'

export const adminAuthMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    res.send(401)
}
