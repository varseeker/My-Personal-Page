import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Donation, ServiceImpl } from 'src/app/shared/models/interface-model';

@Injectable({
  providedIn: 'root',
})
export class HomeService{
  
  constructor(
    private readonly http: HttpClient
  ){}

  readonly storage: Storage = sessionStorage;
  subject: Subject<boolean> = new Subject<boolean>();

  token: string = sessionStorage.getItem('token') as string;
  
  
  save(t: Donation): Observable<any> {
      return this.http.post<any>('/api/pages/group5/donate', t)
  }

  private handleError(error: any): Observable<any> {
    console.error(error);

    alert(`Terjadi Kesalahan ${error}`);

    return EMPTY;
  }

  public getAll(): Observable<Donation[]> {
    return this.http
      .get<Donation[]>('/api/donations')
      .pipe(catchError((error) => this.handleError(error)));
  }

  public listUpdated():Observable<boolean> {
    return this.subject.asObservable();
  }
}
