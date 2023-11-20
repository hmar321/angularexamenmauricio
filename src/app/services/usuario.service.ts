import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../models/Login';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private urlApi: string;

  constructor(private _http: HttpClient) {
    this.urlApi = environment.urlApiCubos;
  }

  getToken(usuario: Login): Observable<any> {
    var request = "api/manage/login";
    var dato = JSON.stringify(usuario);
    var header = new HttpHeaders().set('content-type', 'application/json')
    return this._http.post(this.urlApi + request, dato, { headers: header });
  }

  insertarPerfil(usuario: Usuario): Observable<any> {
    var request = "api/manage/registrousuario";
    var dato = JSON.stringify(usuario);
    var header = new HttpHeaders().set('content-type', 'application/json')
    return this._http.post(this.urlApi + request, dato, { headers: header });
  }

  getPerfilUsuario(): Observable<any> {
    var request = "api/manage/perfilusuario";
    var token = localStorage.getItem('token');
    var header = new HttpHeaders().set('Authorization', 'bearer ' + token);
    return this._http.get(this.urlApi + request, { headers: header });
  }
}
