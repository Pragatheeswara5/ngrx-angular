import { Component } from '@angular/core';
import { CounterValue } from './counter-value/counter-value';
import { CounterButton } from './counter-button/counter-button';
import { CustomInput } from "./custom-input/custom-input";

@Component({
  selector: 'app-counter',
  imports: [CounterValue, CounterButton, CustomInput],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {

  
}
