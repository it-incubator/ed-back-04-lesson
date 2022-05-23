import {adminsRepository} from '../repositories/admins-repository'
import {AdminDBType} from '../repositories/types'
import {ObjectId} from 'mongodb'
import bcrypt from 'bcrypt'
import {jwtUtility} from '../application/jwt-utility'

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
    async isPasswordCorrect(password: string, hash: string) {
        const compareResult: boolean = await bcrypt.compare(password, hash)
        return compareResult
    },
    async checkAndFindUserByToken(token: string) {
        try {
            const adminId: ObjectId | null = await jwtUtility.extractAdminIdFromToken(token)
            if (!adminId) return null
            const admin = await adminsRepository.findById(adminId)
            return admin
        } catch (error) {
            return null
        }
    }
}
