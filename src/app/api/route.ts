import type {NextApiRequest, NextApiResponse} from 'next'
import {NextRequest, NextResponse} from "next/server";
import prisma from "../../../prisma/prisma";
import {connectToDatabase} from "@/app/_helpers/server-helpers";

export async function POST(req: Request, res: NextApiResponse) {
    try {
        const { password } = await req.json()
        await connectToDatabase()
        await prisma.passwords.create({
            data: {
                value: password as string
            }
        });
        return NextResponse.json({password})
    } catch (e) {
        console.log(e)
        return NextResponse.json({message: 'Server Error'}, {status: 500})
    } finally {
        await prisma.$disconnect()
    }

}