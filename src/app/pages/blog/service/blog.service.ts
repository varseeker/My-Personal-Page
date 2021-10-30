import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Blog } from 'src/app/shared/models/interface-model';

@Injectable({
  providedIn: 'root'
})
export class BlogService{

  blogs: Blog[] = [];

  constructor(
    private readonly httpCLient: HttpClient
  ) { }


  getAll(): Observable<Blog[]>{
    return this.httpCLient.get<Blog[]>('api/pages/group5/blogs')
  }

  getById(url: string): Observable<Blog>{
    return this.httpCLient.get<Blog>(`api/pages/group5/blogs/${url}`)
  } 

}
