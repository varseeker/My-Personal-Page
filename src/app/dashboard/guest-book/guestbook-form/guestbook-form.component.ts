import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { delay, map, switchMap } from 'rxjs/operators';
import { GuestBook } from 'src/app/shared/models/interface-model';
import { GuestbookService } from '../service/guestbook.service';

@Component({
  selector: 'app-guestbook-form',
  templateUrl: './guestbook-form.component.html',
  styleUrls: ['./guestbook-form.component.scss']
})
export class GuestbookFormComponent implements OnInit {
  id!: string;
  guestForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    message: new FormControl(null, [Validators.required]),
  });
  guestBook?: GuestBook;

  constructor(private readonly activatedRoute: ActivatedRoute, private readonly guestBookService:GuestbookService, private readonly router:Router) {}

  ngOnInit(): void {
    this.getForm();
  }

  getForm() {
    this.activatedRoute.params
    .pipe(
      map((param)=> param.id),
      delay(500),
      switchMap((id: string) => {
        if (!id) return EMPTY;
        else return  this.id = id, this.guestBookService.getById(id);
      })
    ).subscribe((guestBook: any) => {
      if (guestBook) {
        this.setFormValue(guestBook);
      }
    }, console.error,
    () => console.log
    )
  }

  setFormValue(guestBook: any){
    if (guestBook) {
      this.guestForm.addControl('id', new FormControl())
      this.guestForm.setValue({
        id: this.id,
        name: guestBook.name,
        email: guestBook.email,
        message: guestBook.message,
      });

    }
  }

  onSubmit() {
    const guestBook = this.guestForm.value;

    if (guestBook) {
      this.guestBookService.save(guestBook).pipe(
        delay(500),
      ).subscribe({
        next: (response: GuestBook) => console.log(response),
        error: console.error,
        complete: () => {}
      })
      this.router.navigateByUrl('/guest')
    }


  }

  onReset() {}

  isValid(): boolean {
    if (this.guestForm.get('id')?.value) {
      return true;
    } else {
      return false;
    }
  }

  isFieldValid(fieldName: string): string {
    const control: AbstractControl = this.guestForm.get(
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
    const control: AbstractControl = this.guestForm.get(
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
