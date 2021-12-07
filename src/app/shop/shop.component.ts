import { BeerService } from './../beer.service';
import { iBeer } from './../../models/beer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  beers!: iBeer[];

  constructor(private BeerService:BeerService) { }

  ngOnInit(): void {
  this.BeerService.getAll().subscribe(
    (data) => this.beers = data
  )
  }

}
