import { NextResponse } from "next/server"

export interface ResponseJson {
    count: number
}


export async function GET(request: Request) {
    const response: ResponseJson = {
        count: 100
    }
    return NextResponse.json(response)
}