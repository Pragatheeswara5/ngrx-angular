import { Component, Input } from '@angular/core';
import { Course } from '../../models/course.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { showForm } from '../state/courses.selector';
import { deleteCourse, setEditMode, setSelectedCourse, showCreateForm } from '../state/courses.action';

@Component({
  selector: 'app-course-card',
  imports: [],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard {

  constructor(private store: Store<AppState>){}
  @Input() course: Course | null = null;

  onCourseEdit(){ 
    this.store.dispatch(showCreateForm({value:true}));
    this.store.dispatch(setEditMode({value:true}));
    this.store.dispatch(setSelectedCourse({course:this.course}));
  }

  onCourseDelete(){
    const doDelete = confirm(`Do you want to delete ${this.course?.title} course?`)
    if(doDelete){
      this.store.dispatch(deleteCourse({id:this.course?.id}))
    }
  }
}
