import { useReducer } from "react"
import { UIContext } from "./UIContext"
import { uiReducer } from "./uiReducer"


export interface UIState {
    sidemenuOpen: boolean
    isAdding:boolean
    isDragging:boolean
}

const UI_INITIAL_STATE: UIState = {
    sidemenuOpen: false,
isAdding:false,
isDragging:false
}

export const UIProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);
    
    const closeSideMenu= () => dispatch({ type:'UI - Close Sidebar' });
    const openSideMenu= () => dispatch({ type:'UI - Open Sidebar' });
    const setIsAddingEntry = (isAdding:boolean)=>dispatch({type:"UI - SetIsAddingEntry",payload:isAdding})
const startDraagging = () => {
    dispatch({type:'UI - Start Draagging'})
}

const endDraagging = () => {
    dispatch({type:'UI - End Draagging'})
}


    return (
        <UIContext.Provider value={{
            ...state,

            closeSideMenu,
            openSideMenu,

            setIsAddingEntry,

            startDraagging,
            endDraagging,
        }}>
            {children}
        </UIContext.Provider>
    )
}
