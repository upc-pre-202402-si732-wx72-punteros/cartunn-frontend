import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  hide = true;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  login(email: string, password: string) {
    if (email.toLowerCase() === 'client' && password.toLowerCase() === 'client') {
      this.router.navigate(['/client/home']);
    }
    else if (email.toLowerCase() === 'staff' && password.toLowerCase() === 'staff') {
      this.router.navigate(['/staff/home']);
    }
  }
}
