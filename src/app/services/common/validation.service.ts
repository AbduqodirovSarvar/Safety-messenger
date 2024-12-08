import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor(
    private helperService: HelperService
  ) { }

  strongPasswordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.value;
  
      if (!password) {
        return null;
      }
  
      const strongPasswordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
      const valid = strongPasswordPattern.test(password);
  
      return valid ? null : { strongPassword: true };
    };
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
