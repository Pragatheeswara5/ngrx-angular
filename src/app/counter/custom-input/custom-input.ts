import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CounterState } from '../states/counter.state';
import { Store } from '@ngrx/store';
import { customIncrement, customToggleBtn } from '../states/counter.actions';

@Component({
  selector: 'app-custom-input',
  imports: [CommonModule, FormsModule],
  templateUrl: './custom-input.html',
  styleUrl: './custom-input.css',
})
export class CustomInput implements OnInit{

  constructor(private store:Store<{counter:CounterState}>){}

  customValue:number=0;
  togglevalue:boolean=false;

  ngOnInit(): void {
      this.store.select('counter').subscribe((value)=>{
        this.togglevalue=value.toggle;
      })
  }

  onCustomValueButtonClicked(){
    this.store.dispatch(customIncrement({value: +this.customValue}))
  }

  onToggleClicked(){
    this.store.dispatch(customToggleBtn());
  }
}
