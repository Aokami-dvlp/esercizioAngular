import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class CounterService {

private counter:number = 0;
counterSubject = new BehaviorSubject<number>(this.counter);

show(): Observable<number> {
  return this.counterSubject.asObservable();
}

add(value:number = 1):void{
  this.counterSubject.next(this.counter += value);
}

sub(value:number = 1):void{
  if(this.counter < value){
    alert("Non puoi andare sotto zero")
  } else {
    this.counterSubject.next(this.counter -= value)
  }
}
  constructor() {
    this.show().subscribe(
      (data) => this.counter = data
    )
  }
}
