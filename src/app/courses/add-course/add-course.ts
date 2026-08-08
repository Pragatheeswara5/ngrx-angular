import { Component } from '@angular/core';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { showCreateForm } from '../state/courses.action';

@Component({
  selector: 'app-add-course',
  imports: [],
  templateUrl: './add-course.html',
  styleUrl: './add-course.css',
})
export class AddCourse {
  constructor(private store:Store<AppState>){}

  hideCreateForm(){
    this.store.dispatch(showCreateForm({value:false}))
  }
}
