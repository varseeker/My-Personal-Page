import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { User } from "src/app/shared/models/interface-model";
import { UserService } from "./user.service";

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: [UserService]
    });
  });
  beforeEach(() => {
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(UserService);

  })
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should return Observable<any> in POST method', () => {
    const url = '/api/users';
    const mockUser: User = {
      username: 'hallo12',
      password: 'hallo12',
      fullName: 'hallo cuy',
      email: 'hallo@email.com',
      phone: '089921100'
    }
    service.save(mockUser).subscribe(
      (respon: any) => {
        expect(respon).toBeDefined();
      }
    )
    const request = httpMock.expectOne(url);
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual(mockUser)
  })

  it('Should return Observable<any> in PUT method', () => {
    const url = '/api/users';
    const mockUser: User = {
      id: '1',
      username: 'hallo12',
      password: 'hallo12',
      fullName: 'hallo cuy',
      email: 'hallo@email.com',
      phone: '089921100'
    }
    service.save(mockUser).subscribe(
      (respon: any) => {
        expect(respon).toBeDefined();
      }
    )
    const request = httpMock.expectOne(url);
    expect(request.request.method).toBe('PUT');
    expect(request.request.body).toEqual(mockUser)
  })

  it('Should return Observable<Donation[]> GET method', () => {
    const url = '/api/users';
    service.getAll().subscribe(
      (respon: any) => {
        expect(respon).toBeDefined();
      }
    )
    const request = httpMock.expectOne(url);
    expect(request.request.method).toBe('GET');
  })

  it('Should return Observable<void> DELTED method', () => {

    const mockUser: User = {
      id: '1',
      username: 'hallo12',
      password: 'hallo12',
      fullName: 'hallo cuy',
      email: 'hallo@email.com',
      phone: '089921100'
    }

    service.delete(mockUser.id!).subscribe(
      (respon: any) => {
        expect(respon).toBeFalsy();
      }
    )

    const url = `/api/users/${mockUser.id}`
    service.delete(mockUser.id!)
    const request = httpMock.expectOne(url);
    expect(request.request.method).toBe('DELETE');
  })

  it('Should return Observable<User> GET by id method', () => {

    const mockUser: User = {
      id: '1',
      username: 'hallo12',
      password: 'hallo12',
      fullName: 'hallo cuy',
      email: 'hallo@email.com',
      phone: '089921100'
    }

    service.getById(mockUser.id!).subscribe(
      (respon: any) => {
        expect(respon).toBeDefined();
      }
    )

    const url = `/api/users/${mockUser.id}`
    service.getById(mockUser.id!);
    const request = httpMock.expectOne(url);
    expect(request.request.method).toBe('GET');
  })

});
