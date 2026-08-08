import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CourseState } from "./courses.state";

const getCourseState = createFeatureSelector<CourseState>('courses');

export const getCourses = createSelector(getCourseState, (state)=>{
    return state.courses;
})

export const showForm = createSelector(getCourseState, (state)=>{
    return state.showForm;
})