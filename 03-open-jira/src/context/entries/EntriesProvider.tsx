import { useEffect, useReducer } from 'react'
import { EntriesContext } from './EntriesContext'
import { entriesReducer } from './entriesReducer'
import { Entry } from '@/interfaces'
import { v4 as uuidv4 } from 'uuid'
import { entriesApi } from '../../../api'


export interface EntriesState {
    entries: Entry[]
}

const Entries_INITIAL_STATE: EntriesState = {
    entries: []

}

export const EntriesProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);


    const refreshEntries = async () => {
        const { data } = await entriesApi.get<Entry[]>('/entries')
        dispatch({
            type: '[Entry] - Load-Entry',
            payload: data
        })

    }

    useEffect(() => {
        refreshEntries()
    }, [])

    const addNewEntry = async (description: string) => {




        try {

            const { data } = await entriesApi.post<Entry>('/entries', { description })


            dispatch({ type: '[Entry] - Add-Entry', payload: data })
        } catch (error) {

        }
    }
    const updateEntry = async (entry: Entry) => {

        try {
            await entriesApi.put(`/entries/${entry._id}`, { status: entry.status })
            dispatch({ type: '[Entry] - Update-Entry', payload: entry })
        } catch (error) {
            console.log({ error });

        }
    }
    return (
        <EntriesContext.Provider value={{
            ...state,

            //Methods
            addNewEntry,
            updateEntry
        }}>
            {children}
        </EntriesContext.Provider>
    )
}
