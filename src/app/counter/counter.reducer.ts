import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';
import { counterState, CounterState } from './states/counter.state';

export const counterReducer = createReducer<CounterState>(
  counterState,
  on(increment, (state) => ({ ...state, counter: state.counter + 1 })),
  on(decrement, (state) => ({ ...state, counter: state.counter - 1 })),
  on(reset, () => counterState)
);
