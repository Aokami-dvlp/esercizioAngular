import { beerList } from './../models/mock-data';
import { iBeer } from './../models/beer';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

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
  return this.beerSubject.value.find((beer) => beer.id === id)
}

getBySelect(name:string, type:string){
  return this.beerSubject.value.find((beer) => beer.name === name && beer.type === type)
}
}
