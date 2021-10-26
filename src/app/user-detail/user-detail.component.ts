import { obj } from '../../../Typescript/Esercizio1';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user = obj;
  firstCompany = this.user.companies?.find(item => item.id === 148979);
  secondCompany = this.user.companies?.find(item => item.id === 123123);

  constructor(){}

  ngOnInit(): void {
  }

}
