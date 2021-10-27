import { Component, Input, OnInit } from '@angular/core';
import { Object } from 'Typescript/Esercizio1'


@Component({
  selector: 'user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {

@Input() user!:Object;

  constructor() { }

  ngOnInit(): void {
  }

}
