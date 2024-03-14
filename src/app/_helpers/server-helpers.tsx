import {db} from "../db/db";

export const connectToDatabase = async () => {
    try {
        await db.$connect()
    } catch (e) {
        console.log(e)
        throw new Error('Unable to connect Database')
    }
}