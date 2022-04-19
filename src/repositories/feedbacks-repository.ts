import {feedbacksCollection, usersCollection} from './db'
import {FeedbackDBType, UserDBType} from './types'
import {ObjectId} from 'mongodb'
import {usersService} from '../domain/users-service'

export const feedbacksRepository = {
    async getAllFeedbacks(): Promise<FeedbackDBType[]> {
        return feedbacksCollection
            .find()
            .sort('createdAt', -1)
            .toArray()
    },
    async createFeedback(comment: string, userId: ObjectId): Promise<FeedbackDBType> {
        const user = await usersService.findUserById(userId)
        if (!user) throw new Error('user is not exists for specified userId')

        const feedback: FeedbackDBType = {
            userId,
            createdAt: new Date(),
            comment,
            userName: user.userName,
            _id: new ObjectId()
        }
        await feedbacksCollection.insertOne(feedback)
        return feedback
    },
    async findUserById(id: number): Promise<UserDBType | null> {
        let product = await usersCollection.findOne({id: id})
        if (product) {
            return product
        } else {
            return null
        }
    }
}

export const repositoryDB = {}
