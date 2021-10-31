import { HttpClientTestingModule } from "@angular/common/http/testing";
import { DebugElement } from "@angular/core";
import { ComponentFixture, fakeAsync, TestBed, tick } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { GuestBook } from "src/app/shared/models/interface-model";
import { GuestBookComponent } from "../guest-book.component";
import { GuestbookService } from "../service/guestbook.service";
import { GuestbookFormComponent } from "./guestbook-form.component";

describe('GuestBookComponent', () => {
    let fixture: ComponentFixture<GuestbookFormComponent>
    let component: GuestbookFormComponent;

    beforeEach(async ()=> {
        await TestBed.configureTestingModule({
          declarations: [GuestBookComponent],
          imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
          providers: [GuestbookService],
        }).compileComponents()
        fixture = TestBed.createComponent(GuestbookFormComponent)
        component = fixture.componentInstance;
        fixture.detectChanges
    });

      const formGuest = (name: string, email: string, message: string) => {
          component.guestForm.controls['name'].setValue(name);
          component.guestForm.controls['email'].setValue(email);
          component.guestForm.controls['message'].setValue(message);
      }
    
    //   it('Should create the GuestBookComponent', ()=>{
    //     fixture = TestBed.createComponent(GuestBookComponent)
    //     const guestBook = fixture.componentInstance;
    //     expect(guestBook).toBeTruthy();
    //   })

      it('Component created', () => {
          expect(component).toBeTruthy();
      })

      it('GuestBookForm Initial State ', ()=> {
        expect(component.guestForm).toBeDefined();
        expect(component.guestForm.valid).toBeDefined();
        expect(component.guestForm.invalid).toBeDefined();
      })

      it('GuestBookForm field validity ', ()=> {
        formGuest('Rudi','rudi@gmail.com', 'hallo');
        const guestForm: GuestBook = {name: 'Rudi', email: 'rudi@gmail.com' , message:'hallo'}
        expect(component.guestForm.value).toEqual(guestForm)
      })

      it('Successfully submit on onSubmit()', ()=> {
        component.guestForm.value.name = 'Rudi';
        component.onSubmit();
      })
    
      it('Successfully setFormValue() from onSubmit', ()=> {
        component.id = 'id';
        const guestBook: GuestBook = {name: 'Rudi', email: 'rudi@gmail.com' , message:'hallo'}
        component.setFormValue(guestBook);
      })
    
      it('Successfully displayErrors() from onSubmitTodo ', ()=> {
        component.id = 'iniId';
        const guestBook: GuestBook = {name: 'Rudi', email: 'rudi@gmail.com' , message:'hallo'}
        component.displayErrors('name')
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