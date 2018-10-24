import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const routes = {
  all: () => 'http://localhost:3000/charities?_expand=organisation',
  one: (charityId: number) => `http://localhost:3000/charities/${charityId}`

};


@Injectable()
export class CharityService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<string> {
    return this.httpClient
      .get(routes.all())
      .pipe(
      map((body: any) => body),
        catchError(() => of('Error, could not load charity list :-('))
      );
  }

  getCharity(charityId: number): Observable<string> {
    return this.httpClient
      .get(routes.one(charityId))
      .pipe(
      map((body: any) => body),
        catchError(() => of('Error, could not load charity :-('))
      );
  }
}
