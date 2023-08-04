import type { NextApiRequest, NextApiResponse } from 'next'
import { IEntry } from '../../../../models/Entry'
import { db } from '../../../../database'
import { Entry } from '../../../../models'

type Data =
    | { message: string }
    | IEntry[]

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {


    switch (req.method) {
        case 'GET':
            return await getEntries(res)

        default:
            return res.status(400).json({ message: 'Metodo http no disponible' })
    }




}

const getEntries = async (res: NextApiResponse<Data>) => {
    await db.connect();

    const entries = await Entry.find().sort({ createdAt: 'ascending' })
    await db.disconnect();

    res.status(200).json(entries)

}