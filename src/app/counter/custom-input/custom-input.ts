import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CounterState } from '../states/counter.state';
import { Store } from '@ngrx/store';
import { customIncrement, customToggleBtn } from '../states/counter.actions';
import { getToggle } from '../states/counter.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-input',
  imports: [CommonModule, FormsModule, AsyncPipe],
  templateUrl: './custom-input.html',
  styleUrl: './custom-input.css',
})
export class CustomInput implements OnInit{

  constructor(private store:Store<{counter:CounterState}>){}

  customValue:number=0;
  togglevalue$:Observable<boolean> | null = null;

  ngOnInit(): void {
      this.togglevalue$ = this.store.select(getToggle);
  }

  onCustomValueButtonClicked(){
    this.store.dispatch(customIncrement({value: +this.customValue}))
  }

  onToggleClicked(){
    this.store.dispatch(customToggleBtn());
  }
}
