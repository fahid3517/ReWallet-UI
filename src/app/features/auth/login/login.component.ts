import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['',[Validators.required]],
      password: ['',[Validators.required]],
    });
  }

  onSubmit() {
    if(this.loginForm.valid)
    {
      this.authService.login(this.loginForm.value).subscribe((response: any) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/dashboard']);
      });
    }
    
  }
}