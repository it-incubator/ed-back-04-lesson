import {usersRepository} from '../repositories/users-repository'
import {UserDBType} from '../repositories/types'
import {ObjectId} from 'mongodb'

export const usersService = {
    async getAllUsers(): Promise<UserDBType[]> {
        return usersRepository.getAllUsers()
    },
    async createUser(login: string, email: string, password: string): Promise<UserDBType> {
        const newProduct: UserDBType = {
            _id: new ObjectId(),
            userName: login,
            email,
            password,
            createdAt: new Date()
        }
        return usersRepository.createUser(newProduct)
    },
    async findUserById(id: ObjectId): Promise<UserDBType | null> {
        return usersRepository.findUserById(id)
    },
    async checkCredentials(loginOrEmail: string, password: string) {
        return false
    }
}
