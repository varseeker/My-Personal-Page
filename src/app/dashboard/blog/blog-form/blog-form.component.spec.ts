import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { BlogFormComponent } from "./blog-form.component"

describe('BlogForm-AdminComponent', () => {
    let fixture: ComponentFixture<BlogFormComponent>
    let element: HTMLElement;
    let component: BlogFormComponent;
    let debugElement: DebugElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BlogFormComponent]
        }).compileComponents()

        fixture = TestBed.createComponent(BlogFormComponent)
        element = fixture.nativeElement;
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;
    })

    // it('Should create the BlogForm-AdminComponent', ()=>{
    //     fixture = TestBed.createComponent(BlogFormComponent)
    //     const app = fixture.componentInstance;
    //     expect(app).toBeTruthy();
    //   })
    
    //   it('Should have a tittle "Angular Intro"', ()=> {
    //     fixture = TestBed.createComponent(AppComponent)
    //     const app = fixture.componentInstance;
    //     expect(app.title).toBe('Angular Intro');
    //   })
    
    //   it('Should return 4 after use function sum with parameter 2 and 2', ()=> {
    //     fixture = TestBed.createComponent(AppComponent)
    //     const app = fixture.componentInstance;
    //     expect(app.sum(2,2)).toEqual(4);
    //   })
    
    //   it('Should have session with name token', ()=> {
    //     fixture = TestBed.createComponent(AppComponent)
    //     const app = fixture.componentInstance;
    //     expect(app.storage).toEqual(sessionStorage.getItem('token'));
    //   })
    
    //   it('Should have session with name token', ()=> {
    //     fixture = TestBed.createComponent(AppComponent)
    //     const app = fixture.componentInstance;
    //     expect(app.storage).toEqual(sessionStorage.getItem('token'));
    //   })
    
    //   it('Should have <app-header></app-header>', ()=> {
    //     const app = fixture.componentInstance;
    //     app.auth = true;
    //     fixture.detectChanges();
    //     expect(element.querySelector('app-header')).toBeTruthy();
    //   })
    
    //   it('Should display title "angular-intro" in html', () => {
    //     const app = fixture.componentInstance;
    //     app.auth = true;
    //     fixture.detectChanges();
    //     const header =  element.querySelector("h1")
    //     expect(header?.textContent).toContain(component.title)
    //   })
    
    //   it('Should have one appHighlight element', ()=>{
    //     const app = fixture.componentInstance;
    //     app.auth = true;
    //     fixture.detectChanges();
    //     const highlight = debugElement.queryAll(By.directive(HighlightDirective))
    //     expect(highlight.length).toBe(1);
    //   })
    
    //   it('Should have one appBsButton element', ()=>{
    //     const app = fixture.componentInstance;
    //     app.auth = true;
    //     fixture.detectChanges();
    //     const highlight = debugElement.queryAll(By.directive(BsButtonDirective))
    //     expect(highlight.length).toBe(1);
    //   })
    // })
    
    // describe('#fakeAsync and Tick', () => {
    //   it('Asynchronous test example with setTimeOut without fake async', () => {
    //     let test = false;
    //     setTimeout(() => {
    //       console.log('running assertion');
    //       test = true;
    //       expect(test).toBeTruthy();
    //     }, 1000);
    //   })
    
    //   it('Asynchronous test example with setTimeOut with fakeasync', fakeAsync(() => {
    //     let test = false;
    //     setTimeout(() => {
    //       console.log('running assertion');
    //       test = true;
    //       expect(test).toBeTruthy()
    //     }, 1000);
    //     expect(test).toBe(false)
    //     tick(500);
    //     expect(test).toBe(false)
    //     tick(500);
    //     expect(test).toBe(true);
    //   }))
})