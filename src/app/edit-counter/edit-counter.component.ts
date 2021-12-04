import { CounterService } from './../counter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.css']
})
export class EditCounterComponent implements OnInit {

value:number = 1;

  constructor(private counterService:CounterService) { }

  ngOnInit(): void {
  }

  add(value:number):void{
    this.counterService.add(value);
  }

  sub(value:number):void{
    this.counterService.sub(value);
  }
}
