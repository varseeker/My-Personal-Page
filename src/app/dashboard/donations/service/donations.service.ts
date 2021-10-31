import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, Subject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Donation } from 'src/app/shared/models/interface-model';

@Injectable({
  providedIn: 'root'
})
export class DonationsService {

  readonly storage: Storage = sessionStorage;
  subject: Subject<boolean> = new Subject<boolean>();

  token: string = sessionStorage.getItem('token') as string;

  constructor(private readonly http: HttpClient) {}

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

  public getById(id: string): Observable<Donation> {
    return this.http
      .get<Donation>(`/api/donations/${id}`)
      .pipe(catchError((error) => this.handleError(error)));
  }

  public save(Donation: any): Observable<any> {
    if (Donation.id) {
      console.log(Donation);
      return this.http
        .put<Donation>(`/api/donations`, Donation)
        .pipe(catchError((error) => this.handleError(error)),
        map((data)=> this.subject.next(true)),
        );
    } else {
      console.log(Donation);
      return this.http
        .post<Donation>(`/api/donations`, Donation)
        .pipe(
          catchError((error) => this.handleError(error)),
          map((data)=> this.subject.next(true)),
        );
    }
  }

  public delete(id: string): Observable<any> {
    return this.http.delete(`/api/donations/${id}`).pipe(
      catchError((error) => this.handleError(error)),
      map((data)=> this.subject.next(true)),
    );
  }

  /**
   * listUpdated
   */
  public listUpdated():Observable<boolean> {
    return this.subject.asObservable();
  }}
