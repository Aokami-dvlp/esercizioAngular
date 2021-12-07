import { beerList } from './../models/mock-data';
import { iBeer } from './../models/beer';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

private beers: iBeer [] = beerList;
beers$ = new BehaviorSubject<iBeer[]>(this.beers);

getAll():Observable<iBeer[]>{
  return this.beers$.asObservable();
}

getById(id:number):Observable<iBeer>{
  return this.getAll().next(
    beerList => beerList.filter(beer => beer.id === id)
  )

}
