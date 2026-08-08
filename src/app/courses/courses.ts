import { Component, OnInit } from '@angular/core';
import { CourseCard } from './course-card/course-card';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { getCourses, showForm } from './state/courses.selector';
import { CommonModule } from '@angular/common';
import { AddCourse } from "./add-course/add-course";
import { showCreateForm } from './state/courses.action';

@Component({
  selector: 'app-courses',
  imports: [CourseCard, CommonModule, AddCourse],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses implements OnInit{

  constructor(private store:Store<AppState>){}
  courses$: Observable<Course[]> | null = null;
  showForm$:Observable<boolean> | null = null;

  ngOnInit(): void {
    this.courses$ = this.store.select(getCourses);
    this.showForm$ = this.store.select(showForm);
  }

  showCreateForm(){
    this.store.dispatch(showCreateForm({value:true}))
  }

}
