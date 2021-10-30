import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GuestBook } from 'src/app/shared/models/interface-model';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  constructor(
    private readonly http: HttpClient
  ) { 
  }

  save(t: GuestBook): Observable<any> {
    return this.http.post<any>('/api/pages/group5/guest-book', t)
  }
}
