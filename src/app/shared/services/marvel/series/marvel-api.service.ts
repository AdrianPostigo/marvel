import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from '../../../../../environments/environment.development';
import { ISeriesResponse } from '../../../models/interfaces/series/iseries-response';
import { ISeriesService } from '../../../models/contracts/series/iseries-service';

@Injectable({
  providedIn: 'root'
})
export class MarvelApiService implements ISeriesService{

  private baseUrl: string = environment.baseUrl;
  private httpClient = inject(HttpClient);

  checkRequestSuccess(): Observable<boolean> {
    return this.httpClient.get<boolean>(`${this.baseUrl}v1/public/series`, { observe: 'response' }).pipe(
      map(response => {
        return response.status === 200;
      }),
      catchError(error => {
        console.error('An error occurred while fetching series:', error);
        return throwError(() => new Error(error.message || 'An unknown error occurred'));
      })
    );
  }
  
  getSeries(offset?: number): Observable <ISeriesResponse>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
      params: new HttpParams().append(
        "offset", offset??0
      )
    };
    return this.httpClient.get<ISeriesResponse>(`${this.baseUrl}v1/public/series`, httpOptions)
      .pipe(
        catchError(error => {
          console.error('An error occurred while fetching series:', error);
          return throwError(() => new Error(error.message || 'An unknown error occurred'));
        })
      );
  }

  getSeriesComics(id: string): Observable <ISeriesResponse>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
    return this.httpClient.get<ISeriesResponse>(`${this.baseUrl}v1/public/series/${id}/comics`, httpOptions)
      .pipe(
        catchError(error => {
          console.error('An error occurred while fetching series:', error);
          return throwError(() => new Error(error.message || 'An unknown error occurred'));
        })
      );
  }
}
