import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GuestBookComponent } from "./guest-book.component";


describe('GuesBook Module Unit Test', ()=> {
  let fixture: ComponentFixture<GuestBookComponent>
  let element: HTMLElement;
  let component: GuestBookComponent;
  let debugElement: DebugElement;

  beforeEach(async ()=> {
    await TestBed.configureTestingModule({
      declarations: [GuestBookComponent],
    }).compileComponents()
    fixture = TestBed.createComponent(GuestBookComponent)
    element = fixture.nativeElement;
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
  });

  it('Should create the GuestBookComponent', ()=>{
    fixture = TestBed.createComponent(GuestBookComponent)
    const GuesBook = fixture.componentInstance;
    expect(GuesBook).toBeTruthy();
  })

  it('GuesBookComponet Should return show true when created', ()=>{
    fixture = TestBed.createComponent(GuestBookComponent)
    const GuesBook = fixture.componentInstance;
    expect(GuesBook.show).toBeTruthy();
  })

  it('GuesBookComponet Should return show true after showGuest(), when init show is false', ()=>{
    fixture = TestBed.createComponent(GuestBookComponent)
    const GuesBook = fixture.componentInstance;
    GuesBook.show = false;
    GuesBook.showGuest()
    fixture.detectChanges();
    expect(GuesBook.show).toBeTruthy();
  })

  it('GuesBookComponet Should return show false after showGuest(), when init show is true', ()=>{
    fixture = TestBed.createComponent(GuestBookComponent)
    const GuesBook = fixture.componentInstance;
    GuesBook.show = true;
    GuesBook.showGuest()
    fixture.detectChanges();
    expect(GuesBook.show).toBeFalsy();
  })
})
