import { useReducer } from 'react'
import { EntriesContext } from './EntriesContext'
import { entriesReducer } from './entriesReducer'
import { Entry } from '@/interfaces'
import { v4 as uuidv4 } from 'uuid'


export interface EntriesState {
    entries: Entry[]
}

const Entries_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: 'Pendiente: Aute nulla qui et occaecat cupidatat qui amet dolor labore.',
            status: 'pending',
            createdAt: Date.now()
        },
        {
            _id: uuidv4(),
            description: 'En - progreso: Velit ex non veniam consectetur consequat magna voluptate incididunt veniam culpa.',
            status: 'in-progress',
            createdAt: Date.now()
        },
        {
            _id: uuidv4(),
            description: 'Terminadaa: Laboris ex ut in non dolor voluptate Lorem labore pariatur et consectetur adipisicing quis occaecat.',
            status: 'finished',
            createdAt: Date.now()
        }
    ]

}

export const EntriesProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

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
