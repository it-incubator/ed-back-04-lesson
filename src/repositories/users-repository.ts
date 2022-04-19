import {usersCollection} from './db'
import {UserDBType} from './types'
import {ObjectId} from 'mongodb'

export const usersRepository = {
    async getAllUsers(): Promise<UserDBType[]> {
        return usersCollection
            .find()
            .sort('createdAt', -1)
            .toArray()
    },
    async createUser(user: UserDBType): Promise<UserDBType> {
        const result = await usersCollection.insertOne(user)
        return user
    },
    async findUserById(id: ObjectId): Promise<UserDBType | null> {
        let product = await usersCollection.findOne({_id: id})
        if (product) {
            return product
        } else {
            return null
        }
    }
}

export const repositoryDB = {}
