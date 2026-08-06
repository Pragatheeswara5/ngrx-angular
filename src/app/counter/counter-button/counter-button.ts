import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from '../states/counter.actions';
import { CounterState } from '../states/counter.state';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-counter-button',
  imports: [],
  templateUrl: './counter-button.html',
  styleUrl: './counter-button.css',
})
export class CounterButton {
  constructor(private store: Store<AppState>) {}

  onIncrement() { this.store.dispatch(increment()); }
  onDecrement() { this.store.dispatch(decrement()); }
  onReset() { this.store.dispatch(reset()); }
}
