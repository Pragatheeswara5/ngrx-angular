import { createReducer, on } from "@ngrx/store";
import { initialState } from "./courses.state";
import { showCreateForm } from "./courses.action";

export const courseReducer = createReducer(
    initialState,
    on(showCreateForm, (state, action)=>{
        return {
            ...state,
            showForm: action.value
        }
    })
)