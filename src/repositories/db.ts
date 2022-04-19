import {MongoClient} from 'mongodb'
import {FeedbackDBType, UserDBType} from './types'

const mongoUri =
    process.env.mongoURI = "mongodb://0.0.0.0:27017/?maxPoolSize=20&w=majority";

const client = new MongoClient(mongoUri);

let db = client.db("users-management")

export const usersCollection = db.collection<UserDBType>('users')
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
