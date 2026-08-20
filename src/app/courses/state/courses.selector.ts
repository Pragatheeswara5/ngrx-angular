import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CourseState } from "./courses.state";
import { COURSE_STATE } from "../../constants";

const getCourseState = createFeatureSelector<CourseState>(COURSE_STATE);

export const getCourses = createSelector(getCourseState, (state)=>{
    return state.courses;
})

export const showForm = createSelector(getCourseState, (state)=>{
    return state.showForm;
})

export const getEditMode = createSelector(getCourseState, (state)=>{
    return state.isEditMode;
})

export const getSelectedCourse = createSelector(getCourseState, (state)=>{
    return state.selectedCourse;
})