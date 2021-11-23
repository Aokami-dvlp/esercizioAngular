import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';

@Component({
  selector: 'user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {

  user?:User;

  constructor() { }

  ngOnInit(): void {
  }

  showUser(user:User){
    this.user = user;
  }

  closeDetail(){
    this.user = undefined;
  }
}
