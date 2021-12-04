import { CounterService } from './../counter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'show-counter',
  templateUrl: './show-counter.component.html',
  styleUrls: ['./show-counter.component.css']
})
export class ShowCounterComponent implements OnInit {

counter:number = 0;

  constructor(private counterService:CounterService) {
  }

  ngOnInit(): void {
    this.counterService.show().subscribe(
      (data) => this.counter = data
    );
  }

}
