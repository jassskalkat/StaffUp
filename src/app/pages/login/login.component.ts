import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { LoginResponse } from '../../models/login-response.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  private loginService: LoginService = inject(LoginService);
  private router: Router = inject(Router);

  onSubmit(): void {
    this.loginService
      .login(this.loginForm.value)
      .subscribe(async (response: LoginResponse): Promise<void> => {
        if (response.result) {
          await this.router.navigate(['/dashboard']);
        }
      });
  }
}
