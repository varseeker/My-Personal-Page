import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { DonationsService } from "src/app/dashboard/donations/service/donations.service";
import { HomeComponent } from "./home.component";
import { HomeService } from "./service/home.service";

describe('HomeComponent()', () => {

    let fixture: ComponentFixture<HomeComponent>;
    let element: HTMLElement;
    let component: HomeComponent;
    let debugElement: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HomeComponent],
            imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
            providers: [HomeService, DonationsService],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
        fixture = TestBed.createComponent(HomeComponent)
        component = fixture.componentInstance
        element = fixture.nativeElement;
        debugElement = fixture.debugElement;
    })

    it('Should create the AboutComponent', () => {
        fixture = TestBed.createComponent(HomeComponent);
        const home = fixture.componentInstance;
        expect(home).toBeTruthy()
    })



})