import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Films } from 'src/app/model/films';
import { Service } from 'src/app/services/services';

@Injectable()
export class HomeServicesService {


  constructor( private a_service: Service ) { }
  public getFilms(): Observable<Films> {
    const usetopUrl: string = `character/`;

    return this.a_service.getQuery(usetopUrl).pipe(
      map((res: any) => {
        if (!res) {
          throw new Error('Value expected!');
        } else {


          return res;
        }
      }),
      catchError((err) => {
        throw new Error(err.message);
      }));
  }
  public getFilmsId(itemId: string): Observable<Films> {
    const usetopUrl: string = `character/${itemId}`;

    return this.a_service.getQuery(usetopUrl).pipe(
      map((res: any) => {
        if (!res) {
          throw new Error('Value expected!');
        } else {


          return res;
        }
      }),
      catchError((err) => {
        throw new Error(err.message);
      }));
  }


}
