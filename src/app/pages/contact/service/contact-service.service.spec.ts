import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { GuestBook } from 'src/app/shared/models/interface-model';
import { ContactServiceService } from './contact-service.service';

describe('ContactService with HTTP Service ', () => {
  let contactService: ContactServiceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ContactServiceService],
    });
    contactService = TestBed.inject(ContactServiceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('Post method test in ContactService', () => {
    const url = '/api/pages/group5/guest-book';
    const expectedMock: GuestBook = {
      name: 'abdul',
      email: 'abdul@gmail.com',
      message: 'yaelah',
    };

    const actualMock: GuestBook = {
      name: 'abdul',
      email: 'abdul@gmail.com',
      message: 'yaelah',
    };

    contactService.save(expectedMock).subscribe((response) => {
      expect(response).toEqual(actualMock);
    });

    const request = httpMock.expectOne(url);
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual(expectedMock);
  });
});
