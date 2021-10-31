import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, Subject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { GuestBook } from 'src/app/shared/models/interface-model';

@Injectable({
  providedIn: 'root'
})
export class GuestbookService {

  readonly storage: Storage = sessionStorage;
  subject: Subject<boolean> = new Subject<boolean>();

  token: string = sessionStorage.getItem('token') as string;

  constructor(private readonly http: HttpClient) {}

  private handleError(error: any): Observable<any> {
    console.error(error);

    alert(`Terjadi Kesalahan ${error}`);

    return EMPTY;
  }

  public getAll(): Observable<GuestBook[]> {
    return this.http
      .get<GuestBook[]>('/api/guest-book')
      .pipe(catchError((error) => this.handleError(error)));
  }

  public getById(id: string): Observable<GuestBook> {
    return this.http
      .get<GuestBook>(`/api/guest-book/${id}`)
      .pipe(catchError((error) => this.handleError(error)));
  }

  public save(GuestBook: any): Observable<any> {
    if (GuestBook.id) {
      console.log(GuestBook);
      return this.http
        .put<GuestBook>(`/api/guest-book`, GuestBook)
        .pipe(catchError((error) => this.handleError(error)),
        map((data)=> this.subject.next(true)),
        );
    } else {
      console.log(GuestBook);
      return this.http
        .post<GuestBook>(`/api/guest-book`, GuestBook)
        .pipe(
          catchError((error) => this.handleError(error)),
          map((data)=> this.subject.next(true)),
        );
    }
  }

  public savePublic(GuestBook: any): Observable<any> {
      console.log(GuestBook);
      return this.http
        .post<GuestBook>(`/api/pages/group5/guest-book`, GuestBook)
        .pipe(catchError((error) => this.handleError(error)),
        map((data)=> this.subject.next(true)),
        );
  }

  public delete(id: string): Observable<any> {
    return this.http.delete(`/api/guest-book/${id}`).pipe(
      catchError((error) => this.handleError(error)),
      map((data)=> this.subject.next(true)),
    );
  }

  /**
   * listUpdated
   */
  public listUpdated():Observable<boolean> {
    return this.subject.asObservable();
  }
}
