import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { AboutComponent } from "./about.component"

describe('AboutComponent()', () => {

    let fixture: ComponentFixture<AboutComponent>;
    let element: HTMLElement;
    let component: AboutComponent;
    let debugElement: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AboutComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        });
        fixture = TestBed.createComponent(AboutComponent)
        component = fixture.componentInstance
        element = fixture.nativeElement;
        debugElement = fixture.debugElement;
    })

    it('Should create the AboutComponent', () => {
        fixture = TestBed.createComponent(AboutComponent);
        const about = fixture.componentInstance;
        expect(about).toBeTruthy()
    })

    
})