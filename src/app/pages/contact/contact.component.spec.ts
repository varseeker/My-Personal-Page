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
      fixture = TestBed.createComponent(ContactComponent)
      const contact = fixture.componentInstance;
      expect(contact).toBeTruthy;
  })

  it('it should have <Appheader></AppHeader>', () => {
      const appHeader = element.querySelector('app-header')
      expect(appHeader).toBeTruthy;
  })

  it('it should have <Appheader></AppHeader>', () => {
    const appHeader = element.querySelector('div')
    expect(appHeader).toBeTruthy;
})
});
