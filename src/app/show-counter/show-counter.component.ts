import { CounterService } from './../counter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'show-counter',
  templateUrl: './show-counter.component.html',
  styleUrls: ['./show-counter.component.css']
})
export class ShowCounterComponent implements OnInit {

/* counter:number|string = this.counterService.show();
 */
  constructor(public counterService:CounterService) {
  }

  ngOnInit(): void {
  }

}
