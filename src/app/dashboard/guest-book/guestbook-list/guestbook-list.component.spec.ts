import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from "@angular/core";
import { ComponentFixture, TestBed, fakeAsync, tick } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { GuestBookComponent } from "../guest-book.component";
import { GuestbookService } from "../service/guestbook.service";
import { GuestbookListComponent } from "./guestbook-list.component";

describe('GuestListComponent', () => {
    let fixture: ComponentFixture<GuestbookListComponent>
    let element: HTMLElement;
    let component: GuestbookListComponent;
    let debugElement: DebugElement;

    beforeEach(async ()=> {
        await TestBed.configureTestingModule({
          declarations: [GuestBookComponent],
          imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
            providers: [GuestbookService],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents()
        fixture = TestBed.createComponent(GuestbookListComponent)
        element = fixture.nativeElement;
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;
      });
    
      it('Should create the GuestbookListComponent', ()=>{
        fixture = TestBed.createComponent(GuestbookListComponent)
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