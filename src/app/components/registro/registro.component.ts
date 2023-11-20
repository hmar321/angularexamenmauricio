import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { Login } from 'src/app/models/Login';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  public perfil: Usuario;
  public passverificar: string;
  constructor(private _service: UsuarioService, private _router: Router) {
    this.perfil = new Usuario(0, "", "", "");
    this.passverificar = "";
  }

  registrarUsuario(): void {
    if (this.passverificar != this.perfil.pass) {
      alert("La contraseña no es la misma");
      return;
    }
    this._service.insertarPerfil(this.perfil).subscribe(() => {
      var login = new Login(this.perfil.email, this.perfil.pass);
      this._service.getToken(login).subscribe((res) => {
        localStorage.setItem('token', res.response);
        this._router.navigate(['/login']);
      });
    });
  }
}
