import { UIState } from "./UIProvider";


export const uiReducer = (state:UIState,action:any) =>{

    switch (action) {
        case '':
            return state
    
        default:
            return state;
    }
}