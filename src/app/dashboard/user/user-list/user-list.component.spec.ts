import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { User } from "src/app/shared/models/interface-model";
import { UserService } from "../service/user.service";
import { UserListComponent } from "./user-list.component";

describe('UserListComponent', () => {
    let component: UserListComponent;
    let fixture: ComponentFixture<UserListComponent>; 

    beforeEach(() => {
        TestBed.configureTestingModule({
          declarations: [UserListComponent],
          imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
          providers: [UserService],
        }).compileComponents();
        fixture = TestBed.createComponent(UserListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });

      it('Component created ', ()=> {
        expect(component).toBeTruthy();
      })

      it('Should showing users', () => {
        const userMock: User[] = [
          {
            id: "1",
            username: 'username',
            password: 'password',
            fullName: 'fullName',
            email: 'email@email',
            phone: '123123'
          }
        ]
        component.ngOnInit();
        component.users = userMock;
        expect(component.users).toEqual(userMock);
      })
    
})