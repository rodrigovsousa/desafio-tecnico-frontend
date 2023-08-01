import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { PovertyIndicator } from '../model/poverty-indicator';
import { Observable, delay, first, tap } from 'rxjs';


export type EntityResponseType = HttpResponse<PovertyIndicator>;
export type EntityArrayResponseType = HttpResponse<PovertyIndicator[]>;

@Injectable({
  providedIn: 'root'
})
export class PovertyService {

  private readonly API = '/api/v1/poverty-indicator/'

  constructor(private http: HttpClient) { }

  getPovertyIndicatorData(countryId: string): Observable<PovertyIndicator[]> {
    return this.http.get<PovertyIndicator[]>(`${this.API}/${countryId}`).pipe(
      tap(indicators => console.log(indicators)),
      first(),
    );
  }

}
