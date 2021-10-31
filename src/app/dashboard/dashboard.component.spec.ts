import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppComponent } from "../app.component";
import { DashboardComponent } from "./dashboard.component";

describe('', ()=> {
  let fixture: ComponentFixture<DashboardComponent>
  let element: HTMLElement;
  let component: DashboardComponent;
  let debugElement: DebugElement;

  beforeEach(async ()=> {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
    }).compileComponents()
    fixture = TestBed.createComponent(DashboardComponent)
    element = fixture.nativeElement;
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
  });

  it('Should create the DashboardComponent', ()=>{
    fixture = TestBed.createComponent(DashboardComponent)
    const dashboard = fixture.componentInstance;
    expect(dashboard).toBeTruthy();
  })

  it('DashboardComponet Should return show true when created', ()=>{
    fixture = TestBed.createComponent(DashboardComponent)
    const dashboard = fixture.componentInstance;
    expect(dashboard.show).toBeTruthy();
  })

  it('DashboardComponet Should return show true when created', ()=>{
    fixture = TestBed.createComponent(DashboardComponent)
    const dashboard = fixture.componentInstance;
    dashboard.show = false;
    dashboard.showUser()
    fixture.detectChanges();
    expect(dashboard.show).toBeTruthy();
  })
})
