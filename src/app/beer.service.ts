import { beerList } from './../models/mock-data';
import { iBeer } from './../models/beer';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { find } from 'rxjs/operators'

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

getById(id:number){
  return this.beers$.pipe(
    find(beer => beer.id === id)
  )
}

}
