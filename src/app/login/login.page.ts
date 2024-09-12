import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  username: string = '';
  password: string = '';

  constructor(private router: Router) { }

  login() {
    // Validación de credenciales locales
    if (this.username === 'admin' && this.password === '1234') {
      // Si las credenciales son correctas, navega a la página Home
      this.router.navigate(['/home']);
    } else {
      alert('Credenciales incorrectas');
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
