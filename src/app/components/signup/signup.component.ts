import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  httpService = inject(HttpService);
  signupForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

  onSubmit() {
    if (this.signupForm.valid && this.signupForm.touched) {
      const { username, email, password, confirmPassword } =
        this.signupForm.value;
      if (password !== confirmPassword) {
        alert('Passwords Not Equal');
        return;
      }
      const newUser = {
        username,
        email,
        password,
        confirmPassword,
        avatar: '/avatar/017.png',
      } as Required<User>;
      this.httpService.signup(newUser);
    }
  }
}
