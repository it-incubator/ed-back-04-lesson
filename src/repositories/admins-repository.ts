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
    async create(admin: AdminDBType): Promise<AdminDBType> {
        const result = await adminsCollection.insertOne(admin)
        return admin
    },
    async findById(id: ObjectId): Promise<AdminDBType | null> {
        let admin = await adminsCollection.findOne({_id: id})
        if (admin) {
            return admin
        } else {
            return null
        }
    },
    async findByEmail(email: string): Promise<AdminDBType | null> {
        const admin = await adminsCollection.findOne({})
        return admin
    }
}

export const repositoryDB = {}
