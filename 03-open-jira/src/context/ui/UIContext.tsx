import { createContext } from 'react'

export interface UIContextProps {
    sidemenuOpen:boolean;
    isAdding:boolean;
    isDragging:boolean;

    //Methods
    openSideMenu:()=>void;
    closeSideMenu:()=>void;
    setIsAddingEntry:(isAdding:boolean)=>void;
    startDraagging:()=>void;
    endDraagging:()=>void;
}

export const UIContext = createContext({} as UIContextProps)
