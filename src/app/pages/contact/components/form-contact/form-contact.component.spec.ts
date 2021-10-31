<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> 0d88de1b2bcf441742c9d0a1b63f1bade409081c
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuestBook } from 'src/app/shared/models/interface-model';
import { ContactServiceService } from '../../service/contact-service.service';
import { FormContactComponent } from './form-contact.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing"; 
import { ValidationErrors, AbstractControl, FormGroup } from '@angular/forms';

<<<<<<< HEAD

describe('FormContactComponent()', () => {
  let component: FormContactComponent;
  let fixture: ComponentFixture<FormContactComponent>;
  let serviceContact: ContactServiceService;
=======
describe('FormContactComponent()', () => {
  let component: FormContactComponent;
  let fixture: ComponentFixture<FormContactComponent>;
  let authService: ContactServiceService;
>>>>>>> 0d88de1b2bcf441742c9d0a1b63f1bade409081c

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormContactComponent],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: [ContactServiceService],
<<<<<<< HEAD
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormContactComponent)
    component = fixture.componentInstance;
    serviceContact = TestBed.inject(ContactServiceService);
=======
    });
    fixture = TestBed.createComponent(FormContactComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(ContactServiceService);
>>>>>>> 0d88de1b2bcf441742c9d0a1b63f1bade409081c
    fixture.detectChanges();
  });

  const form = (name: string, email: string, message: string) => {
    component.contactForm.controls['name'].setValue(name);
    component.contactForm.controls['email'].setValue(email);
    component.contactForm.controls['message'].setValue(message);
  };

<<<<<<< HEAD
  it('Component created FormContactComponent', () => {
    expect(component).toBeTruthy();
  });
=======
  it('Component created', () => {
    expect(component).toBeTruthy()
  })
>>>>>>> 0d88de1b2bcf441742c9d0a1b63f1bade409081c

  it('Component from initial state', () => {
    expect(component.contactForm).toBeDefined();
    expect(component.contactForm.valid).toBeDefined();
    expect(component.contactForm.invalid).toBeDefined();
<<<<<<< HEAD
  });

  it('check validality', () => {
    form('albert', 'albert@gmail.com', 'semangat');
    const autoMock: GuestBook = {
      name: 'albert',
      email: 'albert@gmail.com',
      message: 'semangat',
=======
  })

  it('Check validity', () => {
    form('albert', 'albert@gmail.com', 'semangat bang');
    const autoMock: GuestBook = {
      name: 'albert',
      email: 'albert@gmail.com',
      message: 'semangat bang',
>>>>>>> 0d88de1b2bcf441742c9d0a1b63f1bade409081c
    };
    expect(component.contactForm.value).toEqual(autoMock);
  });

<<<<<<< HEAD
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
=======

  describe('contactForm', () => {
      let error: ValidationErrors = {};

      describe('name control', () => {
          it('should had required validators', () => {
            let name: AbstractControl = component.contactForm.controls[
                'name'
              ] as AbstractControl;
              expect(name.valid).toBeFalse();
              error = name.errors || {};
              expect(name.errors!['required']).toBeTruthy();
          })
          it('should had required minlength validators', () => {
            let name: AbstractControl = component.contactForm.controls[
                'name'
              ] as AbstractControl;
              expect(name.valid).toBeFalse();
              error = name.errors || {};
              name.setValue('aaaaaa')
              expect(name.hasError('minlength', ['minlength'])).toEqual(false);
          })
      })
  })

});
=======
>>>>>>> origin/master
>>>>>>> 0d88de1b2bcf441742c9d0a1b63f1bade409081c
