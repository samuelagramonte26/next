import { UIState } from "./UIProvider";

export type UIActionType = 
    | { type: 'UI - Open Sidebar' } 
    | { type: 'UI - Close Sidebar' }

export const uiReducer = (state:UIState,action: UIActionType) =>{

    switch (action.type) {
        case 'UI - Close Sidebar':
            return {...state,sidemenuOpen:false}
    case 'UI - Open Sidebar':
    return {...state,sidemenuOpen:true}

        default:
            return state;
    }
}