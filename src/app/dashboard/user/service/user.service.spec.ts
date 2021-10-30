import { TestBed } from '@angular/core/testing';

<<<<<<< HEAD:src/app/pages/contact/service/service.service.spec.ts
import { ServiceService } from './service.service';

describe('ServiceService', () => {
  let service: ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceService);
=======
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
>>>>>>> origin/master:src/app/dashboard/user/service/user.service.spec.ts
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
