import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/Login';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loged:boolean;
  public usuario!: Login;
  constructor(private _service: UsuarioService, private _router: Router) {
    this.usuario = new Login("", "");
    this.loged=false;
  }
  ngOnInit(): void {
    this.actualizarSesion();
  }
  logearUsuario(): void {
    this._service.getToken(this.usuario).subscribe((data) => {
      var token = data.response;
      localStorage.setItem("token", token);
      this.actualizarSesion();
    })
  }
  actualizarSesion():void{
    if (localStorage.getItem('token')!=null) {
      this.loged=true;
    }else{
      this.loged=false;
    }
  }
}
