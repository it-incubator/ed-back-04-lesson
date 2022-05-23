import {AdminDBType} from '../repositories/types'

declare global {
    declare namespace Express {
        export interface Request {
            admin: AdminDBType | null
        }
    }
}
