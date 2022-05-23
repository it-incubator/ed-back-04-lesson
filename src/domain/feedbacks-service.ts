import {adminsRepository} from '../repositories/admins-repository'
import {FeedbackDBType, AdminDBType} from '../repositories/types'
import {ObjectId} from 'mongodb'
import {feedbacksRepository} from '../repositories/feedbacks-repository'

export const feedbacksService = {
    async allFeedbacks(): Promise<FeedbackDBType[]> {
        return feedbacksRepository.getAllFeedbacks()
    },
    async sendFeedback(comment: string, userId: ObjectId): Promise<FeedbackDBType> {
        return feedbacksRepository.createFeedback(comment, userId)
    }
}
