import type { NextApiRequest, NextApiResponse } from 'next'
import { IEntry } from '../../../../models/Entry'
import { db } from '../../../../database'
import { Entry } from '../../../../models'

type Data =
    | { message: string }
    | IEntry[]
    | IEntry

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {


    switch (req.method) {
        case 'GET':
            return await getEntries(res)
        case 'POST':
            return await postEntry(req, res);
       
        default:
            return res.status(400).json({ message: 'Metodo http no disponible' })
    }




}


const postEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const { description = '' } = req.body;


    try {
        db.connect();

        const newEntry = new Entry({
            description,
            createdAt: Date.now()
        })

        await newEntry.save();
        db.disconnect();

        res.status(201).json(newEntry)

    } catch (error) {
        db.disconnect();
        console.log({ error });

        res.status(400).json({
            message: 'Hubo un error'
        })
    }
}

const getEntries = async (res: NextApiResponse<Data>) => {
    await db.connect();

    const entries = await Entry.find().sort({ createdAt: 'ascending' })
    await db.disconnect();

    res.status(200).json(entries)

}