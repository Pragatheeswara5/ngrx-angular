import { createReducer } from "@ngrx/store";
import { initialState } from "./courses.state";

export const courseReducer = createReducer(
    initialState
)