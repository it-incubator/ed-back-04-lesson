import {AdminDBType} from '../repositories/types'

declare global {
    namespace Express {
        export interface Request {
            admin: AdminDBType | null
        }
    }
}
