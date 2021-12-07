import { BeerService } from './../beer.service';
import { iBeer } from './../../models/beer';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  beers!: iBeer[];
  beerID?: iBeer;
  id:number = 1;
  constructor(private BeerService:BeerService) { }

  ngOnInit(): void {
  this.BeerService.getAll().subscribe(
    (data) => this.beers = data
  )

  this.BeerService.getById().subscribe(
    (data) => this.beerID = data
  )
  .unsubscribe
  }

  getById(id:number){
    this.BeerService.getById(id).subscribe(
      (data) => this.beerID = data
  )
}
}
