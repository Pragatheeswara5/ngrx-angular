import { Component, OnInit } from '@angular/core';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { createCourse, showCreateForm } from '../state/courses.action';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  imports: [ReactiveFormsModule],
  templateUrl: './add-course.html',
  styleUrl: './add-course.css',
})
export class AddCourse implements OnInit{

  courseForm:FormGroup;
  constructor(private store:Store<AppState>){}

  ngOnInit() {
      this.courseForm = new FormGroup({
        title: new FormControl(null, [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100)
        ]),
        description: new FormControl(null, [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(5000)
        ]),
        author: new FormControl(null, [
          Validators.required
        ]),
        price: new FormControl(null),
        image: new FormControl(null)
      });
  }

  hideCreateForm(){
    this.store.dispatch(showCreateForm({value:false}))
  }

  onCourseCreateForm(){
    if(!this.courseForm.valid){
      return;
    }
    this.store.dispatch(createCourse({course:this.courseForm.value}));
    this.store.dispatch(showCreateForm({value:false}))
  }
}
