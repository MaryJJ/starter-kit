import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '@env/environment.prod';
import { Logger } from '@app/core';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
const log = new Logger('Blox Service');

@Injectable({ providedIn: 'root' })
export class HarryPotterService {
  constructor(private httpClient: HttpClient) {}
  getCharacters(): Observable<any> {
    return this.httpClient
      .get<any>('/characters', {
        params: {
          key: environment.key
        }
      })
      .pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}
