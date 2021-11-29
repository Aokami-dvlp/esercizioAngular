import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class CounterService {

counter:number = 0;

show(){
  if (this.counter >= 0) {
    return this.counter
  } else {
    this.counter = 0;
    return 'Errore'
  }
}

add(value:number){
  this.counter += value;
}

sub(value:number){
  this.counter -= value;
}
  constructor() { }
}
