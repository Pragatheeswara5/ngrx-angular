import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { CounterState } from '../states/counter.state';

@Component({
  selector: 'app-counter-value',
  imports: [],
  templateUrl: './counter-value.html',
  styleUrl: './counter-value.css',
})
export class CounterValue implements OnInit, OnDestroy{
  constructor(private store: Store<{ counter: CounterState }>) {}
  counter: number = 0;
  counterSubscription: Subscription | null = null;

  ngOnInit(): void {
    this.counterSubscription = this.store.select('counter').subscribe((value) => {
      this.counter = value.counter;
    });
  }

  ngOnDestroy(): void {
      if(this.counterSubscription) this.counterSubscription.unsubscribe();
  }
}
