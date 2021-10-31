import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { GuestBook } from "src/app/shared/models/interface-model";
import { GuestbookService } from "./guestbook.service";


describe('GuestbookService', () => {
  let service: GuestbookService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: [GuestbookService]
    });
  });
  beforeEach(() => {
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(GuestbookService);

  })
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should return Observable<any> in POST method', () => {
    const url = '/api/guest-book';
    const mockDonations: GuestBook = {
      name: 'halo',
      email: 'halo@halo',
      message: 'Hallo bang'
    }
    service.save(mockDonations).subscribe(
      (respon: any) => {
        expect(respon).toBeDefined();
      }
    )
    const request = httpMock.expectOne(url);
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual(mockDonations)
  })

  it('Should return Observable<any> in PUT method', () => {
    const url = '/api/guest-book';
    const mockDonations: GuestBook = {
      id: '1',
      name: 'halo',
      email: 'halo@halo',
      message: 'Hallo bang'
    }
    service.save(mockDonations).subscribe(
      (respon: any) => {
        expect(respon).toBeDefined();
      }
    )
    const request = httpMock.expectOne(url);
    expect(request.request.method).toBe('PUT');
    expect(request.request.body).toEqual(mockDonations)
  })

  it('Should return Observable<Donation[]> GET method', () => {
    const url = '/api/guest-book';
    service.getAll().subscribe(
      (respon: any) => {
        expect(respon).toBeDefined();
      }
    )
    const request = httpMock.expectOne(url);
    expect(request.request.method).toBe('GET');
  })

  it('Should return Observable<void> DELETED method', () => {

    const mockDonations: GuestBook = {
      id: '1',
      name: 'halo',
      email: 'halo@halo',
      message: 'Hallo bang'
    }

    service.delete(mockDonations.id!).subscribe(
      (respon: any) => {
        expect(respon).toBeFalsy();
      }
    )

    const url = `/api/guest-book/${mockDonations.id}`
    service.delete(mockDonations.id!)
    const request = httpMock.expectOne(url);
    expect(request.request.method).toBe('DELETE');
  })

  it('Should return Observable<donation> GET by id method', () => {

    const mockDonations: GuestBook = {
      id: '1',
      name: 'halo',
      email: 'halo@halo',
      message: 'Hallo bang'
    }

    service.getById(mockDonations.id!).subscribe(
      (respon: any) => {
        expect(respon).toBeDefined();
      }
    )

    const url = `/api/guest-book/${mockDonations.id}`
    service.getById(mockDonations.id!);
    const request = httpMock.expectOne(url);
    expect(request.request.method).toBe('GET');
  })

});
