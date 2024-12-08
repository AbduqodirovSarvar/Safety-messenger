import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidationService } from '../../services/common/validation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loader: boolean = false;
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private validationService: ValidationService
  ) {
    this.loginForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, validationService.strongPasswordValidator()]]
    });
  }

  ngOnInit() {

  }

  onLogin() {
    this.loader = true;
    setTimeout(() => {
      this.loader = false;
      this.router.navigate(['/chat']);
    }, 2000);
  }
}
