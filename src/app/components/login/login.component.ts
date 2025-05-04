import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  httpService = inject(HttpService);
  formBuilder = new FormBuilder();
  loginForm = this.formBuilder.group({
    email: this.formBuilder.control(''),
    password: this.formBuilder.control(''),
  });

  onSubmit() {
    if (this.loginForm.touched && this.loginForm.valid) {
      this.httpService.login(
        this.loginForm.value as Pick<User, 'email' | 'password'>
      );
    }
  }
}
