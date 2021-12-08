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
  beerID?: iBeer;
  id:number = 0;
  name?:string;
  type?:string;
  selectedBeer?:iBeer;
  disabled:boolean = true;

  constructor(private BeerService:BeerService) { }

  ngOnInit(): void {
  this.BeerService.getAll().subscribe(
    (data:iBeer[]) => this.beers = data)
  }

  selectedID(id:number):iBeer|undefined{
   return this.beerID = this.BeerService.getById(id)

  }

  selectBeer(name:string, type:string):iBeer|undefined{
    return this.selectedBeer = this.BeerService.getBySelect(name, type)
  }
}
