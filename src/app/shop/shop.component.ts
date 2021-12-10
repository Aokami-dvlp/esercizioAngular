import { Observable } from 'rxjs';
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

  constructor(private BeerService:BeerService) { }

  ngOnInit(): void {
  this.BeerService.getAll().subscribe(
    (data:iBeer[]) => this.beers = data)

  }


  selectedID(id:number){
    this.BeerService.getById(id).subscribe(
      (data) => this.beerID = data).unsubscribe
  }

  selectBeer(name:string, type:string){
    this.BeerService.getBySelect(name, type).subscribe(
      (data) => this.selectedBeer = data).unsubscribe
  }
}
