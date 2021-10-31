import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DonationsComponent } from "./donations.component";


describe('Donation Module Unit Test', ()=> {
  let fixture: ComponentFixture<DonationsComponent>
  let element: HTMLElement;
  let component: DonationsComponent;
  let debugElement: DebugElement;

  beforeEach(async ()=> {
    await TestBed.configureTestingModule({
      declarations: [DonationsComponent],
    }).compileComponents()
    fixture = TestBed.createComponent(DonationsComponent)
    element = fixture.nativeElement;
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
  });

  it('Should create the DonationsComponent', ()=>{
    fixture = TestBed.createComponent(DonationsComponent)
    const Donation = fixture.componentInstance;
    expect(Donation).toBeTruthy();
  })

  it('DonationComponet Should return show true when created', ()=>{
    fixture = TestBed.createComponent(DonationsComponent)
    const Donation = fixture.componentInstance;
    expect(Donation.show).toBeTruthy();
  })

  it('DonationComponet Should return show true after showDonations(), when init show is false', ()=>{
    fixture = TestBed.createComponent(DonationsComponent)
    const Donation = fixture.componentInstance;
    Donation.show = false;
    Donation.showDonations()
    fixture.detectChanges();
    expect(Donation.show).toBeTruthy();
  })

  it('DonationComponet Should return show false after showDonations(), when init show is true', ()=>{
    fixture = TestBed.createComponent(DonationsComponent)
    const Donation = fixture.componentInstance;
    Donation.show = true;
    Donation.showDonations()
    fixture.detectChanges();
    expect(Donation.show).toBeFalsy();
  })
})
