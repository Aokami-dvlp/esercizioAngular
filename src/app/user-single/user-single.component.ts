import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from "../models/User"

@Component({
  selector: 'user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {

@Input() user!:User;

@Output() removedUser = new EventEmitter<User>();
@Output() showedUser = new EventEmitter<User>();


constructor() { }

ngOnInit(): void {
}

removeUser(user: User): void {
  this.removedUser.emit(user);
}

showUser(user: User): void {
  this.showedUser.emit(user);
}

}
