import {MongoClient} from 'mongodb'
import {FeedbackDBType, AdminDBType} from './types'
import {settings} from '../settings'

const client = new MongoClient(settings.MONGO_URI);

let db = client.db("users-management")

export const adminsCollection = db.collection<AdminDBType>('admins')
export const feedbacksCollection = db.collection<FeedbackDBType>('feedbacks')

export async function runDb() {
    try {
        // Connect the client to the server
        await client.connect();
        // Establish and verify connection
        await client.db("products").command({ ping: 1 });
        console.log("Connected successfully to mongo server");
    } catch {
        console.error("Can't connect to DB");
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
