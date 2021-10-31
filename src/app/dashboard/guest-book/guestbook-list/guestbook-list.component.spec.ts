import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { GuestBook } from "src/app/shared/models/interface-model";
import { GuestbookService } from "../service/guestbook.service";
import { GuestbookListComponent } from "./guestbook-list.component";

describe('GuestbookListComponent', () => {
  let component: GuestbookListComponent;
  let fixture: ComponentFixture<GuestbookListComponent>;
  let guestService: GuestbookService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuestbookListComponent],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: [GuestbookService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestbookListComponent);
    guestService = TestBed.inject(GuestbookService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should showing guest', () => {
    const guestMock: GuestBook[] = [
      {
        id: 'exampleId',
        name: 'cusul',
        email: 'asas@asaom',
        message: 'ALO'
      },
      {
        id: 'e2061e05-661f-4620-b64d-6ad8829f96eb',
        name: 'cus',
        email: 'asas@asa',
        message: 'ALO'
      },
      {
        id: 'e2061e05-551f-4620-b64d-6ad8829f96eb',
        name: 'cus',
        email: 'asas@asa',
        message: 'ALO'
      }
    ];
    component.ngOnInit();
    component.guestbooks = guestMock;
    expect(component.guestbooks).toEqual(guestMock);
    expect(component.guestbooks.length).toEqual(guestMock.length);
  })

  it('Should onDelete isDefined', () => {
    expect(component.onDelete).toBeDefined();
  })

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

})
})
