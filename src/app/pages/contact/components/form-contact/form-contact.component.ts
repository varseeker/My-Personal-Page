import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Observer } from 'rxjs';
import { delay } from 'rxjs/operators';
import { GuestbookService } from 'src/app/dashboard/guest-book/service/guestbook.service';
import { GuestBook } from 'src/app/shared/models/interface-model';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss'],
})
export class FormContactComponent implements OnInit {
  subscribe?: Observer<any>;

  contactForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    message: new FormControl(null, [Validators.required]),
  });

  constructor(
    private readonly contactService: GuestbookService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  onReset(): void {
    this.contactForm.reset();
  }

  onSubmit() {
    const guestBook = this.contactForm.value;

    if (guestBook) {
      this.contactService
        .savePublic(guestBook)
        .pipe(delay(500))
        .subscribe({
          next: (response: GuestBook) => console.log(response),
          error: console.error,
          complete: () => {},
        });
      this.router.navigateByUrl('/contact');
      this.onReset();
    }
  }

  isFieldValid(fieldName: string): string {
    const control: AbstractControl = this.contactForm.get(
      fieldName
    ) as AbstractControl;

    if (control && control.touched && control.invalid) {
      return 'is-invalid';
    } else if (control && control.valid) {
      return 'is-valid';
    } else {
      return '';
    }
  }

 
}
