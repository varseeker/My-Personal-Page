<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> 0d88de1b2bcf441742c9d0a1b63f1bade409081c
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from 'src/app/app.component';
import { ContactComponent } from './contact.component';

describe('ContanctComponent', () => {
  let element: HTMLElement;
  let fixture: ComponentFixture<ContactComponent>;
  let component: ContactComponent;
  let debug: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    debug = fixture.debugElement;
  });

  it('should create the ContactComponent', () => {
    fixture = TestBed.createComponent(ContactComponent);
    const contact = fixture.componentInstance;
    expect(contact).toBeTruthy;
  });

  it('it should have <appheader></appheader>', () => {
    const item = element.querySelector('app-header');
    expect(item).toBeTruthy;
  });

  it('it should have div', () => {
    const item = element.querySelector('div');
    expect(item).toBeTruthy;
  });

  it('should have <app-form-contact></app-form-contact>', () => {
    const item = element.querySelector('app-form-contact');
    expect(item).toBeTruthy;
  });

  it('should have <appfooter></appfooter>', () => {
    const item = element.querySelector('app-footer');
    expect(item).toBeTruthy;
  });
<<<<<<< HEAD
});
=======
});
=======
>>>>>>> origin/master
>>>>>>> 0d88de1b2bcf441742c9d0a1b63f1bade409081c
