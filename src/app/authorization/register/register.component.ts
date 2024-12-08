import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateUserRequest } from '../../models/user/create.user.model';
import { ValidationService } from '../../services/common/validation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm: FormGroup;

  createUserRequest: CreateUserRequest = {
    FirstName: '',
    LastName: '',
    Email: '',
    ConfirmCode: '',
    Password: '',
    ConfirmPassword: '',
    Photo: null
  };

  loader: boolean = false;

  constructor(
    private validationService: ValidationService
  ){
    this.registerForm = new FormGroup({
      FirstName: new FormControl(null, [Validators.required]),
      LastName: new FormControl(null, [Validators.required]),
      Email: new FormControl(null, [Validators.required, Validators.email]),
      ConfirmCode: new FormControl(null, [Validators.required]),
      Password: new FormControl(null, [Validators.required]),
      ConfirmPassword: new FormControl(null, [Validators.required]),
      Photo: new FormControl<File | null>(null),
    }, { validators: this.validationService.passwordValidator });
  }

  onRegister() {
    this.createUserRequest = this.registerForm.value;
    console.log(this.createUserRequest);
  }
}
