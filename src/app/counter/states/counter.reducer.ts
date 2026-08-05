import { createReducer, on } from "@ngrx/store";
import { counterState } from "./counter.state";
import { customIncrement, customToggleBtn, decrement, increment, reset } from "./counter.actions";


export const counterReducer = createReducer(
    counterState,
    on(increment, (state) => {
        return { 
            ...state, 
            counter: state.counter + 1 
        }
    }),
    on(decrement, (state) => {
        return { 
            ...state, 
            counter: state.counter - 1 
        }
    }),
    on(reset, (state) => {
        return { 
            ...state, 
            counter: 0 
        }
    }),
    on(customIncrement, (state, action)=>{
        return {
            ...state,
            counter: state.counter + action.value
        }
    }),
    on(customToggleBtn, (state) => {
        return {
            ...state,
            toggle: !state.toggle
        }
    })
)