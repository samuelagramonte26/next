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
        const {data} = await entriesApi.get<Entry[]>('/entries')
       dispatch({
        type:'[Entry] - Load-Entry',
        payload:data
       })
        
    }

    useEffect(() => {
        refreshEntries()
    }, [])

    const addNewEntry = (description: string) => {

        const newEntry: Entry = {
            _id: uuidv4(),
            description,
            createdAt: Date.now(),
            status: 'pending'
        }

        dispatch({ type: '[Entry] - Add-Entry', payload: newEntry })
    }
    const updateEntry = (entry: Entry) => {
        dispatch({ type: '[Entry] - Update-Entry', payload: entry })
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
