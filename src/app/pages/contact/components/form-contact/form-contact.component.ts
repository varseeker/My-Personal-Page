import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observer } from 'rxjs';
import { delay } from 'rxjs/operators';
import { GuestbookService } from 'src/app/dashboard/guest-book/service/guestbook.service';
import { GuestBook } from 'src/app/shared/models/interface-model';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss']
})
export class FormContactComponent implements OnInit {


  subscribe?: Observer <any>;

  contactForm: FormGroup = new FormGroup ({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    message: new FormControl(null),
  })

  constructor(
    private readonly contactService: GuestbookService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
  }

  onReset(): void {
    this.contactForm.reset();
  }

  onSubmit() {
    const guestBook = this.contactForm.value;

    if (guestBook) {
      this.contactService.savePublic(guestBook).pipe(
        delay(500),
      ).subscribe({
        next: (response: GuestBook) => console.log(response),
        error: console.error,
        complete: () => {}
      })
      this.router.navigateByUrl('/contact')
    }

  }

  isValid(): boolean {
    if (this.contactForm.get('id')?.value) {
      return true;
    } else {
      return false;
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

  displayErrors(fieldName: string): string {
    const control: AbstractControl = this.contactForm.get(
      fieldName
    ) as AbstractControl;
    const messages: any = {
      required: 'Field Harus di isi',
      minlength: 'Field Minimal harus lebih panjang dari {minlength}',
    };

    if (control && control.errors) {
      const error = Object.values(control.errors).pop();
      const key: string = Object.keys(control.errors).pop() as string;

      let message = messages[key];

      console.log(message);

      if (key === 'minlength') {
        console.log(error);

        message = message.replace('{minlength}', error.requiredLength);
      }
      return message;
    } else {
      return '';
    }
  }

}
