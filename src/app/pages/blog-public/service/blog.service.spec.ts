import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Blog } from 'src/app/shared/models/interface-model';
import { BlogService } from './blog.service';

describe('BlogService', () => {
  let service: BlogService;
  let blog: Blog[];
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BlogService],
    });
    service = TestBed.inject(BlogService);
    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  it('service should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getEmployees() should call http Get method for the given route', () => {
    blog = [
      {
        title: 'aaa',
        content: 'aaaaa',
        author: 'a',
        url: 'a-a-a-a',
      },
    ];

    service.getAll().subscribe((expected) => {
      expect(expected).toEqual(blog);
    });

    const req = httpMock.expectOne('/api/pages/group5/blogs');

    httpMock.verify();
  });
});
