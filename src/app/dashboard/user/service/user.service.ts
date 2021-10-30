import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable, EMPTY } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ServiceImpl, User } from 'src/app/shared/models/interface-model';

@Injectable({
  providedIn: 'root'
})
export class UserService implements ServiceImpl<User>{

  readonly storage: Storage = sessionStorage;
  subject: Subject<boolean> = new Subject<boolean>();

  token: string = sessionStorage.getItem('token') as string;

  constructor(private readonly http: HttpClient) {}

  private handleError(error: any): Observable<any> {
    console.error(error);

    alert(`Terjadi Kesalahan ${error}`);

    return EMPTY;
  }

  public getAll(): Observable<User[]> {
    return this.http
      .get<User[]>('/api/users')
      .pipe(catchError((error) => this.handleError(error)));
  }

  public getById(id: string): Observable<User> {
    return this.http
      .get<User>(`/api/users/${id}`)
      .pipe(catchError((error) => this.handleError(error)));
  }

  public save(user: any): Observable<any> {
    if (user.id) {
      console.log(user);
      return this.http
        .put<User>(`/api/users`, user)
        .pipe(catchError((error) => this.handleError(error)),
        map((data)=> this.subject.next(true)),
        );
    } else {
      console.log(user);
      return this.http
        .post<User>(`/api/users`, user)
        .pipe(
          catchError((error) => this.handleError(error)),
          map((data)=> this.subject.next(true)),
        );
    }
  }

  public delete(id: string): Observable<any> {
    return this.http.delete(`/api/users/${id}`).pipe(
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
