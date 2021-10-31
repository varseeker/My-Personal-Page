import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { User } from 'src/app/shared/models/interface-model';
import { UserService } from '../service/user.service';
import { UserFormComponent } from './user-form.component';

describe('UserFormComponent with DI', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserFormComponent],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: [UserService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  const form = (username: string, password: string, phone: string, email: string, fullname: string) => {
    component.userForm.controls['username'].setValue(username);
    component.userForm.controls['password'].setValue(password);
    component.userForm.controls['phone'].setValue(phone);
    component.userForm.controls['email'].setValue(email);
    component.userForm.controls['fullname'].setValue(fullname);
  };

  it('Component created ', ()=> {
    expect(component).toBeTruthy();
  })

  it('Component Form Initial State ', ()=> {
    expect(component.userForm).toBeDefined();
    expect(component.userForm.valid).toBeDefined();
    expect(component.userForm.invalid).toBeDefined();
  })

  it('.userForm bawah field validity ', ()=> {
    let error: any = {};
    let name: any = component.userForm.controls['username'];
    expect(name.valid).toBeFalsy();

    error = name.errors || {};
    expect(error['required']).toBeTruthy();

    component.userForm.get('email')?.setValue('')
    error = name.errors['email'] || {};
    expect(error).toBeTruthy();

  })

  it('Successfully submit from onSubmitTodo ', ()=> {
    component.userForm.value.name = 'Dono';
    component.onSubmit();
  })

  it('Successfully setFormValue() from onSubmitTodo ', ()=> {
    const user: User = {username: 'Dono', password: 'asas@asas' ,phone: '021', email: 'asan@as', fullName: 'Dono'}
    component.onReset();
  })

  it('Successfully submit from onSubmitTodo ', ()=> {
    const user: User = {username: 'Dono', password: 'asas@asas' ,phone: '021', email: 'asan@as', fullName: 'Dono'}
    component.isFieldValid('username')
  })

  it('Successfully displayErrors() from onSubmitTodo ', ()=> {
    const user: User = {username: 'Dono', password: 'asas@asas' ,phone: '021', email: 'asan@as', fullName: 'Dono'}
    component.displayErrors('username')
  })

  it('Successfully displayErrors() from onSubmitTodo ', ()=> {
    component.id = 'asda'
    const user: User = {username: 'Dono', password: 'asas@asas' ,phone: '021', email: 'asan@as', fullName: 'Dono'}
    component.setFormValue(user)
  })

});
