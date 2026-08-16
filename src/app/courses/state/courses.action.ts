import { createAction, props } from "@ngrx/store";
import { Course } from "../../models/course.model";

export const showCreateForm = createAction('showForm', props<{value:boolean}>());

export const createCourse = createAction('createCourse', props<{course:Course}>())

export const setEditMode = createAction('setEditMode', props<{value:boolean}>());

export const setSelectedCourse = createAction('setSelectedCourse', props<{course:Course}>())