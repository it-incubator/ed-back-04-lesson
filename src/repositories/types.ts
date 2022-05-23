import {ObjectId, WithId} from 'mongodb'

export type AdminDBType = WithId<{
    email: string
    name: string
    passwordHash: string
    createdAt: Date
}>

export type FeedbackDBType = WithId<{
    adminId: ObjectId
    adminName: string
    comment: string
    createdAt: Date
}>
