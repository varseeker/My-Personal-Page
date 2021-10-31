import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';

describe('ContactComponent()', () => {
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

  it('Should Create the ContactComponent', () => {
    fixture = TestBed.createComponent(ContactComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Should have <app-header></app-header>', () => {
    const appHeader = element.querySelector('app-header');
    expect(appHeader).toBeTruthy();
  });

  it('Should have <app-footer></app-footer>', () => {
    const appFooter = element.querySelector('app-footer');
    expect(appFooter).toBeTruthy();
  });

  // it('Should have <app-form-contact></app-form-contact>', () => {
  //   const appForm = element.querySelector('app-form-contact');
  //   expect(appForm).toBeTruthy();
  // });

  it('Should have div', () => {
    const div = element.querySelector('div');
    expect(div).toBeTruthy();
  });
});
