import { createAction, props } from "@ngrx/store";

export const increment = createAction('[counter] increment');
export const decrement = createAction('[counter] decrement');
export const reset = createAction('[counter] reset');
export const customIncrement = createAction('[counter] custom increment', props<{value:number}>());
export const customToggleBtn = createAction('[counter] custom toggle button');