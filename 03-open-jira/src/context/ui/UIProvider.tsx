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
    return (
        <UIContext.Provider value={{} as UIContextProps}>
            {children}
        </UIContext.Provider>
    )
}
