import { Component } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.scss'
})
export class SettingComponent {
  user = {
    firstName: 'Velda',
    lastName: 'Kiara',
    email: 'velda@gmail.com',
    newPassword: '',
    confirmPassword: '',
  };

  showPassword = false;
  showConfirmPassword = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  isValidForm(): any {
    return (
      this.user.firstName &&
      this.user.lastName &&
      this.user.email &&
      this.user.newPassword === this.user.confirmPassword
    );
  }

  onSubmit() {
    if (this.isValidForm()) {
      console.log('User Details Saved:', this.user);
      alert('Profile updated successfully!');
    } else {
      alert('Please ensure all fields are valid.');
    }
  }
}
