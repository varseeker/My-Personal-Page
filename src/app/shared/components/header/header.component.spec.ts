import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { HeaderComponent } from "./header.component";

describe('HeaderComponent()', ()=>{
  let fixture: ComponentFixture<HeaderComponent>
  let element: HTMLElement;
  let component: HeaderComponent;

  beforeEach(async ()=> {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])]
    }).compileComponents()
    fixture = TestBed.createComponent(HeaderComponent)
    element = fixture.nativeElement;
    component = fixture.componentInstance;
    // element = fixture.nativeElement.querySelector("app-header");
  });

  it('Should create the HeaderComponent', ()=>{
    fixture = TestBed.createComponent(HeaderComponent)
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  })

  it('Should create the HeaderComponent', ()=>{
    expect(component.isLoggedIn).toBeDefined();
  })

  it('Should create the HeaderComponent', ()=>{
    expect(component.onLogOut).toBeDefined();
  })

})
