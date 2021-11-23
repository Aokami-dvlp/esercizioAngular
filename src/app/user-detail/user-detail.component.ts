import { User } from './../models/User';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

@Input() user?:User;
@Output() closedDetail = new EventEmitter<User>();

  constructor(){}

  ngOnInit(): void {
  }

  closeDetail(){
    this.closedDetail.emit();
  }
}
