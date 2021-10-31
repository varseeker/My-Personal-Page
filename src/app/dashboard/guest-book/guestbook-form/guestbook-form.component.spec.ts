import { DebugElement } from "@angular/core";
import { ComponentFixture, fakeAsync, TestBed, tick } from "@angular/core/testing";
import { GuestBookComponent } from "../guest-book.component";

describe('GuestBookComponent', () => {
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
        const guestBook = fixture.componentInstance;
        expect(guestBook).toBeTruthy();
      })

      describe('#fakeAsync and Tick', () => {
        it('Asynchronous test example with setTimeOut without fake async', () => {
          let test = false;
          setTimeout(() => {
            console.log('running assertion');
            test = true;
            expect(test).toBeTruthy();
          }, 1000);
        })
      
        it('Asynchronous test example with setTimeOut with fakeasync', fakeAsync(() => {
          let test = false;
          setTimeout(() => {
            console.log('running assertion');
            test = true;
            expect(test).toBeTruthy()
          }, 1000);
          expect(test).toBe(false)
          tick(500);
          expect(test).toBe(false)
          tick(500);
          expect(test).toBe(true);
        }))

    })


})