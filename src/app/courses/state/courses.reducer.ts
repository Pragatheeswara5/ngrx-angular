import { createReducer, on } from "@ngrx/store";
import { initialState } from "./courses.state";
import { createCourse, deleteCourse, setEditMode, setSelectedCourse, showCreateForm, updateCourse } from "./courses.action";

export const courseReducer = createReducer(
    initialState,
    on(showCreateForm, (state, action)=>{
        return {
            ...state,
            showForm: action.value
        }
    }),
    on(createCourse,(state, action)=>{
        const course = {...action.course};
        course.id = state.courses.length + 1;
        return {
            ...state,
            courses:[...state.courses, course]
        }
    }),
    on(setEditMode, (state, action)=>{
        return {
            ...state,
            isEditMode: action.value
        }
    }),
    on(setSelectedCourse, (state, action)=>{
        return {
            ...state,
            selectedCourse: action.course
        }
    }),
    on(updateCourse, (state, action)=>{
        const updatedCourses = state.courses.map(course=>{
            if(course.id === action.course.id){
                return action.course;
            }
            return course;
        })
        return {
            ...state,
            courses:updatedCourses
        }
    }),
    on(deleteCourse, (state, action)=>{
        const filteredCourses = state.courses.filter(course=>course.id !== action.id);
        return {
            ...state,
            courses: filteredCourses
        }
    })
)