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
    setTimeout(() => {
     this.BeerService.getAll().subscribe(
    (data:iBeer[]) => this.beers = data)}, 500);


  this.BeerService.getById(this.id).subscribe(
    (data) => this.beerID = data
  )
  }

}
