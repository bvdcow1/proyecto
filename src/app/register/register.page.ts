import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  username: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) { }

  register() {
    // Lógica básica para validar el registro
    if (this.password === this.confirmPassword) {
      alert('Registro exitoso');
      // Aquí podrías redirigir a otra página o realizar una acción
    } else {
      alert('Las contraseñas no coinciden');
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
