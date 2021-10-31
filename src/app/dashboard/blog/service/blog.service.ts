import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable, EMPTY } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Blog, ServiceImpl } from 'src/app/shared/models/interface-model';

@Injectable({
  providedIn: 'root'
})
export class BlogService implements ServiceImpl<Blog>{

  readonly storage: Storage = sessionStorage;
  subject: Subject<boolean> = new Subject<boolean>();

  token: string = sessionStorage.getItem('token') as string;

  constructor(private readonly http: HttpClient) {}

  private handleError(error: any): Observable<any> {
    console.error(error);

    alert(`Terjadi Kesalahan ${error}`);

    return EMPTY;
  }

  public getAll(): Observable<Blog[]> {
    return this.http
      .get<Blog[]>('/api/blogs')
      .pipe(catchError((error) => this.handleError(error)));
  }

  public getById(id: string): Observable<Blog> {
    return this.http
      .get<Blog>(`/api/blogs/${id}`)
      .pipe(catchError((error) => this.handleError(error)));
  }

  public save(blog: any): Observable<any> {
    if (blog.id) {
      console.log(blog);
      return this.http
        .put<Blog>(`/api/blogs`, blog)
        .pipe(catchError((error) => this.handleError(error)),
        map((data)=> this.subject.next(true)),
        );
    } else {
      console.log(blog);
      return this.http
        .post<Blog>(`/api/blogs`, blog)
        .pipe(
          catchError((error) => this.handleError(error)),
          map((data)=> this.subject.next(true)),
        );
    }
  }

  public delete(id: string): Observable<any> {
    return this.http.delete(`/api/blogs/${id}`)
    .pipe(
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
