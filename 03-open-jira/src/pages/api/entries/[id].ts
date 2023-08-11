import type { NextApiRequest, NextApiResponse } from 'next'
import { IEntry } from '../../../../models/Entry'
import { db } from '../../../../database'
import { Entry } from '../../../../models'
import mongoose from 'mongoose'

type Data =
    | { message: string }
    | IEntry

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    const { id } = req.query;

    if (!mongoose.isValidObjectId(id)) return res.status(400).json({ message: `El id ${id} no se encontro!` })

    switch (req.method) {
        case 'GET':
            return await getEntryById(req, res)

        case 'PUT':
            return await updateEntry(req, res)

        default:
            return res.status(400).json({ message: 'Metodo http no disponible' })
    }




}



const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const { id } = req.query;

 //   console.log({ id, status });

    try {
        await db.connect();


        const entry = await Entry.findById(id)

        if (!entry) {

            db.disconnect();
            return res.status(404).json({ message: `El id ${id} no se encontro!` })
        }
        const { status = entry.status, description = entry.description } = req.body;
        entry.status = status;

        const entryUpdated = await Entry.findByIdAndUpdate(id, { status,description })
        await db.disconnect();

        res.status(200).json({ message: 'Actualizado con exito' })

    } catch (error) {
        await db.disconnect();
        console.log({ error });

        res.status(400).json({
            message: 'Hubo un error'
        })
    }
}

const getEntryById = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const { id } = req.query;

    await db.connect();

    const entry = await Entry.findById(id)
    if (!entry) {
        db.disconnect();
        return res.status(404).json({ message: `El id ${id} no se encontro!` })
    }
    await db.disconnect();

    return res.status(200).json(entry)

}