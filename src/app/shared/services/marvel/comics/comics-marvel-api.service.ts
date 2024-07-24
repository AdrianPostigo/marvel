import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ISeriesResponse } from '../../../models/interfaces/series/iseries-response';

@Injectable({
  providedIn: 'root'
})
export class ComicsMarvelApiService {

  private baseUrl: string = environment.baseUrl;
  private httpClient = inject(HttpClient);

  getComicById(id: string): Observable <ISeriesResponse>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-type": "application/json",
      }),
    };
    return this.httpClient.get<ISeriesResponse>(`${this.baseUrl}v1/public/comics/${id}`, httpOptions)
      .pipe(
        catchError(error => {
          console.error('An error occurred while fetching players:', error);
          return throwError(() => new Error(error.message || 'An unknown error occurred'));
        })
      );
  }
}
