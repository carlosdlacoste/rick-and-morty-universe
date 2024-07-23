import {NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";
import jwt, {JwtPayload} from 'jsonwebtoken'

interface CustomJwtPayload extends JwtPayload {
    id: string;
    email: string;
}

export async function GET(request: Request, { params }: { params: { id: string } }){
    const authorization = request.headers.get('authorization')
    if(!authorization) return NextResponse.json({"message": "The auth token was not provided"}, {status: 401})
    const token = authorization.split(' ')[1]
    if (!token) return NextResponse.json({"message": "Token is missing or format is incorrect"}, {status: 401});
    try {
        const secret = process.env.JWT_SECRET
        if (!secret) {
            throw new Error('JWT_SECRET is not defined');
        }
        const userVerified = jwt.verify(token, secret) as CustomJwtPayload
        if(!userVerified) return NextResponse.json({"message": "Error! You are not authorized"}, {status: 404})
        const user = await prisma.user.findUnique({
            where: {
                id: Number(userVerified.id)
            }
        })
        if(user !== null && Number(params.id) === Number(userVerified.id)) return NextResponse.json(user, {status: 200})
        return NextResponse.json({"message": "Error! That user doesn't exist"}, {status: 404})
    } catch (error) {
        return NextResponse.json({error: "Internal Server Error"}, {status: 500})
    }
}


export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: Number(params.id)
            }
        })
        if(user !== null){

            const userDeleted = await prisma.user.delete({
                where: {
                    id: Number(params.id)
                }
            })
            if(userDeleted !== null) return NextResponse.json({"message": `User with id ${params.id} has been eliminated`, user: userDeleted})
        }
        return NextResponse.json({"message": "User not found"})
    } catch (error) {
        return NextResponse.json({error: "Internal Server Error"}, {status: 500})
    }

}