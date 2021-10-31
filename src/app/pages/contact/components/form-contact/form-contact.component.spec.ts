
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuestBook } from 'src/app/shared/models/interface-model';
import { ContactServiceService } from '../../service/contact-service.service';
import { FormContactComponent } from './form-contact.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing"; 
import { ValidationErrors, AbstractControl, FormGroup } from '@angular/forms';


describe('FormContactComponent()', () => {
  let component: FormContactComponent;
  let fixture: ComponentFixture<FormContactComponent>;
  let serviceContact: ContactServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormContactComponent],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: [ContactServiceService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormContactComponent)
    component = fixture.componentInstance;
    serviceContact = TestBed.inject(ContactServiceService);
    fixture.detectChanges();
  });

  const form = (name: string, email: string, message: string) => {
    component.contactForm.controls['name'].setValue(name);
    component.contactForm.controls['email'].setValue(email);
    component.contactForm.controls['message'].setValue(message);
  };

  it('Component created FormContactComponent', () => {
    expect(component).toBeTruthy();
  });

  it('Component from initial state', () => {
    expect(component.contactForm).toBeDefined();
    expect(component.contactForm.valid).toBeDefined();
    expect(component.contactForm.invalid).toBeDefined();
  });

  it('check validality', () => {
    form('albert', 'albert@gmail.com', 'semangat');
    const autoMock: GuestBook = {
      name: 'albert',
      email: 'albert@gmail.com',
      message: 'semangat',
    };
    expect(component.contactForm.value).toEqual(autoMock);
  });

  it('contactForm check validity', () => {
    let error: ValidationErrors = {};
    let name: AbstractControl = component.contactForm.controls[
      'name'
    ] as AbstractControl;
    expect(name.valid).toBeFalse();

    error = name.errors || {};
    expect(name.errors!['required']).toBeTruthy();


    let email: AbstractControl = component.contactForm.controls[
      'email'
    ] as AbstractControl;
    expect(email.valid).toBeFalse();

    error = email.errors || {};
    expect(email.errors!['required']).toBeTruthy();
  });
});
