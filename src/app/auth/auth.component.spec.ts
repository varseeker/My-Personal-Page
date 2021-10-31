import { HttpClientModule } from "@angular/common/http";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { from, Observable } from "rxjs";
import { AuthComponent } from "./auth.component";
import { Login } from "./models/login-model";
import { AuthService } from "./service/auth.service";

describe('CredentialsComponent with DI', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthComponent],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: [AuthService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    authService = TestBed.inject(AuthService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  const form = ( username: string, password: string) => {
    component.credentials.controls["username"].setValue(username)
    component.credentials.controls["password"].setValue(password)
  };

  it('Component created ', ()=> {
    expect(component).toBeTruthy();
  })

  it('Component Form Initial State ', ()=> {
    expect(component.credentials).toBeDefined();
    expect(component.credentials.valid).toBeDefined();
    expect(component.credentials.invalid).toBeDefined();
  })

  it('Credentials field validity ', ()=> {
    form('group5', 'group5');
    const credentials: Login = { username: 'group5', password:'group5'}
    expect(component.credentials.value).toEqual(credentials)
  })

  it('Credentials field validity ', ()=> {
    const mockTokenLogin: string = 'ceritanyaToken';
    const spy = spyOn(authService, 'sigin')
    .and.callThrough().and
    .callFake((): Observable<string> => {
      return from([mockTokenLogin])
    })
    component.credentials.get('username')?.setValue('group5');
    component.credentials.get('password')?.setValue('group5');
    component.onSignIn();
    expect(spy).toHaveBeenCalled();
  })

});
