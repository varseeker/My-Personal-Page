import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Donation, ServiceImpl } from 'src/app/shared/models/interface-model';

@Injectable({
  providedIn: 'root',
})
export class HomeService{
  
  constructor(
    private readonly http: HttpClient
  ){}

  storage!: Storage;
  subject!: Subject<boolean>;
  token!: string;
  donations: Donation[] = [];
  
  
  save(t: Donation): Observable<any> {
      return this.http.post<any>('/api/pages/group5/donate', t)
  }
}
