import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { GuestBook } from 'src/app/shared/models/interface-model';

import { BlogService } from './blog.service';

describe('AuthService with HTTP Service ', () => {
  let contactService: BlogService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BlogService],
    });
    contactService = TestBed.inject(BlogService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('Post method test in ContactService', () => {
    const url = '/api/pages/group5/blogs';
    const expectedMock: GuestBook[] = [
      {
        name: 'abdul',
        email: 'abdul@gmail.com',
        message: 'yaelah',
      },
      {
        name: 'abdul',
        email: 'abdul@gmail.com',
        message: 'yaelah',
      },
    ]

    contactService.getAll().subscribe((response) => {
      expect(response).toEqual([]);
    });

    const request = httpMock.expectOne(url);
    expect(request.request.method).toBe('Get');
    expect(request.request.body).toEqual(expectedMock);
  });
})
