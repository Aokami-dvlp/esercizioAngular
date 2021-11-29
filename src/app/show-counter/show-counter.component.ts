import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service'

@Component({
  selector: 'show-counter',
  templateUrl: './show-counter.component.html',
  styleUrls: ['./show-counter.component.css']
})
export class ShowCounterComponent implements OnInit {
 counterValue:number | string;

  constructor(private counter:CounterService) { 
    this.counterValue = counter.show();
  }

  ngOnInit(): void {
  }

}
