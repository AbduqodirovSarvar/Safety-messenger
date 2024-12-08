import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ResetPasswordRequest } from '../../models/authentication/reset.password.model';
import { HelperService } from '../../services/common/helper.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
  resetPasswordForm: FormGroup;

  loader: boolean = false;

  resetPasswordRequest: ResetPasswordRequest = {
    email: '',
    newPassword: '',
    confirmNewPassword: '',
    confirmationCode: 0
  };

  constructor(
    private helperService: HelperService
  ) {
    this.resetPasswordForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      newPassword: new FormControl('', [Validators.required]),
      confirmNewPassword: new FormControl('', Validators.required),
      confirmationCode: new FormControl('', Validators.required)
    }, { validators: this.passwordValidator });
  }

  resetPassword(){
    this.resetPasswordRequest = this.resetPasswordForm.value;
    console.log('reset password', this.resetPasswordRequest);
  }

  passwordValidator: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    const newPassword = group.get('NewPassword')?.value;
    const confirmNewPassword = group.get('ConfirmNewPassword')?.value;

    const passwordErrors: ValidationErrors = {};

    if (newPassword) {
      if (!confirmNewPassword) {
        passwordErrors['confirmPasswordRequired'] = true;
      }

      if (!this.helperService.checkForStrongPassword(newPassword)) {
        passwordErrors['weakPassword'] = true;
      }

      if (confirmNewPassword && newPassword !== confirmNewPassword) {
        passwordErrors['passwordsMismatch'] = true;
      }
    }
    return Object.keys(passwordErrors).length > 0 ? passwordErrors : null;
  };

}
