import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (this.registerForm.valid) {
      const { email, username, password } = this.registerForm.value;
      this.authService.register(email!, username!, password!).subscribe({
        next: () => {
          this.registerForm.reset();
          this.router.navigate(['/login']);
        },
        error: (error) => {
          this.registerForm.reset();
          console.error('Register error:', error);
        }
      });
    }
  }
}
