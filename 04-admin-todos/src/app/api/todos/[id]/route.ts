import prisma from '@/lib/prisma';
import * as yup from 'yup'
import { NextResponse, NextRequest } from 'next/server'


interface Args {
    params: { id: string }
}

export async function GET(request: Request, { params }: Args) {

    const { id } = params;

    const todo = await prisma.todo.findFirst({ where: { id } })

    if (!todo)
        return NextResponse.json({ message: 'TODO no encontrado' }, { status: 404 })


    return NextResponse.json(todo)
}

const posSchema = yup.object({
    description: yup.string().optional(),
    complete: yup.boolean().optional()
})

export async function PUT(request: Request, { params }: Args) {

    try {
        const { id } = params;

        const todo = await prisma.todo.findFirst({ where: { id } })
    
        if (!todo)
            return NextResponse.json({ message: 'TODO no encontrado' }, { status: 404 })
    
        const { description, complete } = await posSchema.validate(await request.json());
        const updateTodo = await prisma.todo.update({where:{id}, data: { description, complete } });

        return NextResponse.json(updateTodo)
    } catch (error) {
        return NextResponse.json(error, { status: 400 })
    }
}