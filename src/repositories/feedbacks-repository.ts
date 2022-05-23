import {feedbacksCollection, adminsCollection} from './db'
import {FeedbackDBType, AdminDBType} from './types'
import {ObjectId} from 'mongodb'
import {adminsRepository} from './admins-repository'

export const feedbacksRepository = {
    async getAllFeedbacks(): Promise<FeedbackDBType[]> {
        return feedbacksCollection
            .find()
            .sort('createdAt', -1)
            .toArray()
    },
    async createFeedback(comment: string, adminId: ObjectId): Promise<FeedbackDBType> {
        const admin = await adminsRepository.findById(adminId)
        if (!admin) throw new Error('admin is not exists for specified userId')

        const feedback: FeedbackDBType = {
            adminId: adminId,
            createdAt: new Date(),
            comment,
            adminName: admin.name,
            _id: new ObjectId()
        }
        await feedbacksCollection.insertOne(feedback)
        return feedback
    },
    async findFeedbackById(id: number): Promise<AdminDBType | null> {
        let feedback = await adminsCollection.findOne({id: id})
        return feedback
    }
}

export const repositoryDB = {}
