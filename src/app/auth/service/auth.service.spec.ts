import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Login } from '../models/login-model';
import { AuthService } from './auth.service';

describe('AuthService with HTTP Service ', () => {
  let authService: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService],
    });
    authService = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('', ()=> {
    const url = '/api/auth/login';
    const mockLogin: Login = {
      username: 'group5',
      password: 'group5'
    }

    const mockLoginToken: string = 'ceritanyaToken'


    authService.sigin(mockLogin)
    .subscribe((response: string)=> {
      expect(response).toEqual(mockLoginToken);
    })
    const request = httpMock.expectOne(url);
    expect(request.request.method).toBe('POST')
    expect(request.request.body).toEqual(mockLogin)
  })
});
