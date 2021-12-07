import { beerList } from './../models/mock-data';
import { iBeer } from './../models/beer';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, pipe } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class BeerService {

private beers: iBeer[] = beerList;
private beerSubject = new BehaviorSubject<iBeer[]>(this.beers);
beers$ = this.beerSubject.asObservable();

getAll():Observable<iBeer[]>{
  return this.beers$
}

getById(id:number = 1){
  console.log("getById in service called with id = " + id)
  return this.beers$.pipe(
    map(beer => beer.find(beer => beer.id === id))
  )
}

}
