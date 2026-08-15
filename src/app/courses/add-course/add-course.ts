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
          Validators.minLength(6),
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

  showTitleValidationErrors(){
    const titleControl = this.courseForm.get('title');
    if(titleControl.touched && !titleControl.valid){
      if(titleControl.errors['required']){
        return 'Title is a required field.'
      }
      if(titleControl.errors['minlength']){
        return 'Title must be atleast 6 characters.'
      }
      if(titleControl.errors['maxlength']){
        return 'Title cannot be more than 100 characters.'
      }
    }
    return '';
  }

  showDescriptionValidationErrors(){
    const descriptionControl = this.courseForm.get('description');
    if(descriptionControl.touched && !descriptionControl.valid){
      if(descriptionControl.errors['required']){
        return 'Description is a required field.'
      }
      if(descriptionControl.errors['minlength']){
        return 'Description must be atleast 10 characters.'
      }
      if(descriptionControl.errors['maxlength']){
        return 'Description cannot be more than 5000 characters.'
      }
    }
    return '';
  }

  showAuthorValidationErrors(){
    const authorControl = this.courseForm.get('author');
    if(authorControl.touched && !authorControl.valid){
      if(authorControl.errors['required']){
        return 'author is a required field.'
      }
    }
    return '';
  }
}
