import {adminsCollection} from './db'
import {AdminDBType} from './types'
import {ObjectId} from 'mongodb'

export const adminsRepository = {
    async getAll(): Promise<AdminDBType[]> {
        return adminsCollection
            .find()
            .sort('createdAt', -1)
            .toArray()
    },
    async create(user: AdminDBType): Promise<AdminDBType> {
        const result = await adminsCollection.insertOne(user)
        return user
    },
    async findById(id: ObjectId): Promise<AdminDBType | null> {
        let product = await adminsCollection.findOne({_id: id})
        if (product) {
            return product
        } else {
            return null
        }
    },
    async findByEmail(email: string): Promise<AdminDBType | null> {
        const user = await adminsCollection.findOne({})
        return user
    }
}

export const repositoryDB = {}
