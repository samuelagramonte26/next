import { DragEvent } from 'react'
import { List, Paper } from "@mui/material"
import { EntryCard } from "./EntryCard"
import { EntryStatus } from "@/interfaces"
import { useContext, useMemo } from "react";
import { EntriesContext } from "@/context/entries";
import { UIContext } from '@/context/ui';
import styles from './EntryList.module.css'

interface props {
    status: EntryStatus;
}

export const EntryList = ({ status }: props) => {

    const { entries, updateEntry } = useContext(EntriesContext);
    const { isDragging, endDraagging } = useContext(UIContext);

    const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries])

    const onDrop = (event: DragEvent<HTMLDivElement>) => {
        const id = event.dataTransfer.getData('idEntry')

        const entry = entries.find(x => x._id === id)!
        entry.status = status;
        updateEntry(entry)
        endDraagging()


    }
    const allowDrop = (event: DragEvent<HTMLDivElement>) => event.preventDefault();


    return (
        <div
            onDrop={onDrop}
            onDragOver={allowDrop}
            className={isDragging ? styles.dragging : ''}
        >
            <Paper sx={{ height: 'calc(100vh - 250px)', backgroundColor: 'transparent', padding: '1px 5px' }}>
                <List sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all .3s' }}>
                    {
                        entriesByStatus.map(entry => (<EntryCard key={entry._id} entry={entry} />))
                    }
                </List>
            </Paper>
        </div>
    )
}
