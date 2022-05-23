import {adminsRepository} from '../repositories/admins-repository'
import {AdminDBType} from '../repositories/types'
import {ObjectId} from 'mongodb'
import {authService} from './auth-service'


export const adminsService = {
    async getAllAdmins(): Promise<AdminDBType[]> {
        return adminsRepository.getAll()
    },
    async create(adminName: string, email: string, password: string): Promise<AdminDBType> {
        const passwordHash = await authService.generateHash(password)
        const admin: AdminDBType = {
            _id: new ObjectId(),
            name: adminName,
            email,
            passwordHash,
            createdAt: new Date()
        }
        return adminsRepository.create(admin)
    },
    async findUserById(id: ObjectId): Promise<AdminDBType | null> {
        return adminsRepository.findById(id)
    }
}
