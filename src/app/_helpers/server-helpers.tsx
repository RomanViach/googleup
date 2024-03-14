import prisma from "../../../prisma/prisma";

export const connectToDatabase = async () => {
    try {
        await prisma.$connect()
    } catch (e) {
        console.log(e)
        throw new Error('Unable to connect Database')
    }
}