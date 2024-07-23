import {NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function GET(request: Request) {
    try {
        const users = await prisma.user.findMany()
        if (users.length !== 0) return NextResponse.json(users, {status: 200})
        return NextResponse.json({"message": "There are no users!"}, {status: 404})
    } catch (error) {
        return NextResponse.json({error: "Internal Server Error"}, {status: 500})
    }
}

export async function POST(request: Request) {
    try {
        const data = await request.json()
        if(data.fullName == null) return NextResponse.json({"message": "full name was not found"}, {status: 404})
        if(data.email == null) return NextResponse.json({"message": "Email was not found"}, {status: 404})
        if(data.password == null) return NextResponse.json({"message": "Password was not found"}, {status: 404})
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(data.password, salt);
        const newUser = await prisma.user.create({
            data: {
                fullName: data.fullName,
                email: data.email,
                password: hashedPassword
            }
        })
        return NextResponse.json(newUser)
    } catch (error) {
        return NextResponse.json({error: "Internal Server Error"}, {status: 500})
    }
}