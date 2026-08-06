import { counterReducer } from "../counter/states/counter.reducer";
import { CounterState } from "../counter/states/counter.state";
import { courseReducer } from "../courses/state/courses.reducer";
import { CourseState } from "../courses/state/courses.state";

export interface AppState {
    counter: CounterState,
    courses: CourseState
}

export const appReducer = {
    counter: counterReducer,
    courses: courseReducer
}