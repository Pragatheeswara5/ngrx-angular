import { Course } from "../../models/course.model";

export interface CourseState{
    courses:Course[]
}

export const initialState:CourseState = {
    courses:[]
}