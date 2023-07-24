import { createContext } from 'react'

export interface UIContextProps {
    sidemenuOpen:boolean,
    openSideMenu:()=>void;
    closeSideMenu:()=>void;
}

export const UIContext = createContext({} as UIContextProps)
