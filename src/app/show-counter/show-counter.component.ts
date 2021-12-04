import { CounterService } from './../counter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'show-counter',
  templateUrl: './show-counter.component.html',
  styleUrls: ['./show-counter.component.css']
})
export class ShowCounterComponent implements OnInit {

  constructor(private counterService:CounterService) {
  }

  ngOnInit(): void {
  }

  show():number|string{
    return  this.counterService.show();
  }

}
