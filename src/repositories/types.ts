import {ObjectId, WithId} from 'mongodb'

export type UserDBType = WithId<{
    email: string
    userName: string
    password: string
    createdAt: Date
}>

export type FeedbackDBType = WithId<{
    userId: ObjectId
    userName: string
    comment: string
    createdAt: Date
}>
