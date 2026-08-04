import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CounterState } from '../states/counter.state';
import { Store } from '@ngrx/store';
import { customIncrement } from '../states/counter.actions';

@Component({
  selector: 'app-custom-input',
  imports: [CommonModule, FormsModule],
  templateUrl: './custom-input.html',
  styleUrl: './custom-input.css',
})
export class CustomInput {

  constructor(private store:Store<{counter:CounterState}>){}

  customValue:number=0;

  onCustomValueButtonClicked(){
    this.store.dispatch(customIncrement({value: +this.customValue}))
  }
}
