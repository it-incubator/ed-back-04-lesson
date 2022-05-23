import {adminsRepository} from '../repositories/admins-repository'
import {AdminDBType} from '../repositories/types'
import {ObjectId} from 'mongodb'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import {settings} from '../settings'

export const authService = {
    async getAllUsers(): Promise<AdminDBType[]> {
        return adminsRepository.getAll()
    },
    /**
     *
     * @param email
     * @param password
     * @return null if credentials are incorrect and admin entity in opposite case
     */
    async checkCredentials(email: string, password: string): Promise<AdminDBType | null> {
        return null
    },
    async generateHash(password: string) {
        const hash = await bcrypt.hash(password, 10)
        return hash
    },
    async checkAndFindUserByToken(token: string) {
        try {
            const result: any = jwt.verify(token, settings.JWT_SECRET)
            const user = await adminsRepository.findById(new ObjectId(result.userId))
            return user
        } catch (error) {
            return null
        }
    }
}
