import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class CounterService {

private counter:number = 0;
counterSubject = new Subject<number>();

show(): Observable<number> {
  return this.counterSubject;
}

add(value:number):void{
  this.counterSubject.next(this.counter += value);
}

sub(value:number):void{
  if(this.counter < value){
    alert("Non puoi andare sotto zero")
  } else {
    this.counterSubject.next(this.counter -= value);
  }
}
  constructor() { }
}
