import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { GuestBook } from 'src/app/shared/models/interface-model';
import { ContactServiceService } from '../../service/contact-service.service';
import { FormContactComponent } from './form-contact.component';

describe('FormContactComponent with DI', () => {
  let component: FormContactComponent;
  let fixture: ComponentFixture<FormContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormContactComponent],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: [ContactServiceService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  const form = (name: string, email: string, message: string) => {
    component.contactForm.controls['name'].setValue(name);
    component.contactForm.controls['email'].setValue(email);
    component.contactForm.controls['message'].setValue(message);
  };

  it('Component created ', ()=> {
    expect(component).toBeTruthy();
  })

  it('Component Form Initial State ', ()=> {
    expect(component.contactForm).toBeDefined();
    expect(component.contactForm.valid).toBeDefined();
    expect(component.contactForm.invalid).toBeDefined();
  })

  it('contactForm field validity ', ()=> {
    form('Dono','asas@asas', 'hallo');
    const donate: GuestBook = {name: 'Dono', email: 'asas@asas' , message:'hallo'}
    expect(component.contactForm.value).toEqual(donate)
  })

  it('contactForm field validity ', ()=> {
    let error: any = {};
    let name: any = component.contactForm.controls['name'];
    expect(name.valid).toBeFalsy();

    error = name.errors || {};
    expect(error['required']).toBeTruthy();

    component.contactForm.get('email')?.setValue(100)
    error = name.errors['min'] || {};
    expect(error).toBeTruthy();

  })

  it('Successfully submit from onSubmitTodo ', ()=> {
    component.contactForm.value.name = 'Dono';
    component.onSubmit();
  })

  it('Successfully setFormValue() from onSubmitTodo ', ()=> {
    const donate: GuestBook = {name: 'Dono', email: 'asas@asas' , message:'hallo'}
    component.onReset();
  })

  it('Successfully submit from onSubmitTodo ', ()=> {
    const donate: GuestBook = {name: 'Dono', email: 'asas@asas' , message:'hallo'}
    component.isFieldValid('name')
  })



});
