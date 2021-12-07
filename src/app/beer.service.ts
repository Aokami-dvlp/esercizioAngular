import { beerList } from './../models/mock-data';
import { iBeer } from './../models/beer';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

beers: iBeer [] = beerList;
beers$ = new Subject<iBeer[]>();

  constructor() { }
}
