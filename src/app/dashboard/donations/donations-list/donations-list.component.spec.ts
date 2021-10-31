import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Donation } from 'src/app/shared/models/interface-model';
import { DonationsService } from '../service/donations.service';
import { DonationsListComponent } from './donations-list.component';

describe('DonationsListComponent with DI testing ', () => {
  let component: DonationsListComponent;
  let donationService: DonationsService;
  let fixture: ComponentFixture<DonationsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonationsListComponent],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: [
        DonationsListComponent,
        {
          provide: DonationsService
        }
      ]
    });
    component = TestBed.inject(DonationsListComponent);
    donationService = TestBed.inject(DonationsService);

  });

  it('Should showing .donations list after create component ', ()=> {
    expect(component.donations).toEqual([])
  })

  it('Should showing .donations ', ()=> {
    const donateMock: Donation[] = [
      {
        id: 'ass',
        donor: 'Jamet',
        amount: 10000,
      },
      {
        id: 'assl',
        donor: 'Jamet',
        amount: 10000
      },
    ];
    component.ngOnInit();
    component.donations = donateMock;

    expect(component.donations).toEqual(donateMock)
    expect(component.donations.length).toEqual(donateMock.length)
  })

  it('Should getAll() is Defined ', ()=> {
    expect(component.getAll).toBeDefined()
  })

  it('Should getTotal() is Defined ', ()=> {
    expect(component.getTotal).toBeDefined()
  })

  it('Should onDelete is Defined ', ()=> {
    expect(component.onDelete).toBeDefined()
  })

  it('Should onDelete is Defined ', ()=> {
    fixture = TestBed.createComponent(DonationsListComponent)
    const donateMock: Donation[] = [
      {
        id: 'ass',
        donor: 'Jamet',
        amount: 10000,
      },
      {
        id: 'assl',
        donor: 'Jamet',
        amount: 10000
      },
    ];
    component.total = component.getTotal(donateMock)
    fixture.detectChanges();
    expect(component.total).toBeDefined();
    expect(component.total).toEqual(20000)
  })

});
