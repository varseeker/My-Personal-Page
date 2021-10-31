import { TestBed } from "@angular/core/testing"
import { AppModule } from "./app.module"
import { AuthModule } from "./auth/auth.module"
import { BlogModule } from "./dashboard/blog/blog.module"
import { DashboardModule } from "./dashboard/dashboard.module"
import { DonationsModule } from "./dashboard/donations/donations.module"
import { GuestBookModule } from "./dashboard/guest-book/guest-book.module"
import { UserModule } from "./dashboard/user/user.module"
import { ContactModule } from "./pages/contact/contact.module"
import { SharedModule } from "./shared/shared.module"

describe('Module Test : ', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppModule,
        SharedModule,
        DashboardModule,
        UserModule,
        AuthModule,
        DonationsModule,
        BlogModule,
        GuestBookModule,
        ContactModule
      ]
    })
  })


  it('Initialize AppModule() ', ()=> {
    const module = TestBed.inject(AppModule)
    expect(module).toBeDefined();
  })

  it('Initialize SharedModule() ', ()=> {
    const module = TestBed.inject(SharedModule)
    expect(module).toBeTruthy();
  })

  it('Initialize DashboardModule() ', ()=> {
    const module = TestBed.inject(DashboardModule)
    expect(module).toBeTruthy();
  })

  it('Initialize UserModule() ', ()=> {
    const module = TestBed.inject(UserModule)
    expect(module).toBeTruthy();
  })

  it('Initialize AuthModule() ', ()=> {
    const module = TestBed.inject(AuthModule)
    expect(module).toBeTruthy();
  })

  it('Initialize DonationsModule() ', ()=> {
    const module = TestBed.inject(DonationsModule)
    expect(module).toBeTruthy();
  })

  it('Initialize BlogModule() ', ()=> {
    const module = TestBed.inject(BlogModule)
    expect(module).toBeTruthy();
  })

  it('Initialize GuestBookModule() ', ()=> {
    const module = TestBed.inject(GuestBookModule)
    expect(module).toBeTruthy();
  })

  it('Initialize ContactModule() ', ()=> {
    const module = TestBed.inject(ContactModule)
    expect(module).toBeTruthy();
  })

})
