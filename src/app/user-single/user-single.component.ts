import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Object } from 'Typescript/Esercizio1'


@Component({
  selector: 'user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {

@Input() user!:Object;

@Output() removedUser = new EventEmitter<Object>();

constructor() { }

ngOnInit(): void {
}

removeUser(user: Object): void {
  this.removedUser.emit(user);
}

}
