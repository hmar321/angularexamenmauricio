import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  public usuario!: Usuario;
  constructor(private _service: UsuarioService) {

  }
  ngOnInit(): void {
    this.cargarUsuario();
  }

  cargarUsuario(): void {
    this._service.getPerfilUsuario().subscribe((data) => {
      this.usuario = data;
    });
  }
}
