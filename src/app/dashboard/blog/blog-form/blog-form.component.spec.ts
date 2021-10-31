import { HttpClientTestingModule } from "@angular/common/http/testing";
import { DebugElement } from "@angular/core";
import { ComponentFixture, fakeAsync, TestBed, tick } from "@angular/core/testing"
import { RouterTestingModule } from "@angular/router/testing";
import { BlogService } from "../service/blog.service";
import { BlogFormComponent } from "./blog-form.component"

describe('BlogForm-AdminComponent', () => {
    let fixture: ComponentFixture<BlogFormComponent>
    let element: HTMLElement;
    let component: BlogFormComponent;
    let debugElement: DebugElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
            declarations: [BlogFormComponent],
            providers: [BlogService]
        }).compileComponents()

        fixture = TestBed.createComponent(BlogFormComponent)
        element = fixture.nativeElement;
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;
    })

    it('Should create the BlogForm-AdminComponent', ()=>{
        fixture = TestBed.createComponent(BlogFormComponent)
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
      })
    

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