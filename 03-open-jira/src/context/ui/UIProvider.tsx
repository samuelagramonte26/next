import { useReducer } from "react"
import { UIContext, UIContextProps } from "./UIContext"
import { uiReducer } from "./uiReducer"


export interface UIState {
    sidemenuOpen: boolean
}

const UI_INITIAL_STATE: UIState = {
    sidemenuOpen: false
}

export const UIProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);
    
    const closeSideMenu= () => dispatch({ type:'UI - Close Sidebar' });
    const openSideMenu= () => dispatch({ type:'UI - Open Sidebar' });



    return (
        <UIContext.Provider value={{
            ...state,
            closeSideMenu,
            openSideMenu
        }}>
            {children}
        </UIContext.Provider>
    )
}
