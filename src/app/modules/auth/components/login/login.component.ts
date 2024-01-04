import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthApiService } from '@auth/services/auth-api/auth-api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  // loginForm: 
  private authApiService = inject(AuthApiService);
  ngOnOnit(){
    this.authApiService.login().subscribe({
      next: () => {
         
      }
    })
  }
}
