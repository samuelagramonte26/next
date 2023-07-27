import { UIState } from "./UIProvider";

export type UIActionType =
    | { type: 'UI - Open Sidebar' }
    | { type: 'UI - Close Sidebar' }
    | { type: 'UI - SetIsAddingEntry', payload: boolean }
    | { type: 'UI - Start Draagging' }
    | { type: 'UI - End Draagging' }

export const uiReducer = (state: UIState, action: UIActionType) => {

    switch (action.type) {
        case 'UI - Close Sidebar':
            return { ...state, sidemenuOpen: false }

        case 'UI - Open Sidebar':
            return { ...state, sidemenuOpen: true, isAdding: false }

        case "UI - SetIsAddingEntry":
            return { ...state, isAdding: action.payload }
        case "UI - End Draagging":
            return { ...state, isDragging: false }
        case "UI - Start Draagging":
            return { ...state, isDragging:true }

        default:
            return state;
    }
}