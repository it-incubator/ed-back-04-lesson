import {AdminDBType} from '../repositories/types'
import {ObjectId} from 'mongodb'
import jwt from 'jsonwebtoken'
import {settings} from '../settings'

export const jwtUtility = {
    /**
     * @param admin
     * @return Returns JWT-token
     */
    async createJWT(admin: AdminDBType) {
        const token = "jwttoken"
        return token
    },
    async extractAdminIdFromToken(token: string): Promise<ObjectId | null> {
        try {
            const result: any = jwt.verify(token, settings.JWT_SECRET)
            return new ObjectId(result.adminId)
        } catch (error) {
            return null
        }
    }
}
