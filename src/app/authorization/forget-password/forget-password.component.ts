import { Component } from '@angular/core';
import { SendConfirmationCodeRequest } from '../../models/authentication/confirmation.message.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {
  loader: boolean = false;
  forgotPasswordForm: FormGroup;

  senConfirmationCodeRequest: SendConfirmationCodeRequest = {
    email: '',
  };

  constructor() {
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });
   }

  sendConfirmationCode(): void {
    this.senConfirmationCodeRequest = this.forgotPasswordForm.value;
    console.log(this.senConfirmationCodeRequest);
  }
}
