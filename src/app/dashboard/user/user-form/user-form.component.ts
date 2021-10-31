import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { delay, map, switchMap } from 'rxjs/operators';
import { User } from 'src/app/shared/models/interface-model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  id!: string;
  userForm: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    fullName: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(null, [Validators.required]),
  });
  user?: User;

  constructor(private readonly activatedRoute: ActivatedRoute, private readonly userService:UserService, private readonly router:Router) {}

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
        else return  this.id = id, this.userService.getById(id);
      })
    ).subscribe((user: any) => {
      if (user) {
        this.setFormValue(user);
      }
    }, console.error,
    () => console.log
    )
  }

  setFormValue(user: any){
    if (user) {
      this.userForm.addControl('id', new FormControl())
      this.userForm.setValue({
        id: this.id,
        fullName: user.fullName,
        username: user.username,
        password: `Password si ${user.fullName}`,
        email: user.email,
        phone: user.phone,
      });

    }
  }

  onSubmit() {
    const user = this.userForm.value;

    if (user) {
      this.userService.save(user).pipe(
        delay(500),
      ).subscribe({
        next: (response: User) => console.log(response),
        error: console.error,
        complete: () => {}
      })
      this.router.navigateByUrl('/user')
    }
  }

  onReset() {}

  isValid(): boolean {
    if (this.userForm.get('id')?.value) {
      return true;
    } else {
      return false;
    }
  }

  isFieldValid(fieldName: string): string {
    const control: AbstractControl = this.userForm.get(
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
    const control: AbstractControl = this.userForm.get(
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
