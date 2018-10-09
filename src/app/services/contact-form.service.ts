import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private http: HttpClient
  ) {

  }

  sendContact(contactForm): Observable<any> {
    return this.http.post(environment.serverUrl + '/email', contactForm, this.httpOptions).pipe(
      tap(() => console.log('message sent'))
    );
  }


}
