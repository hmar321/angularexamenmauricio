import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompraService {
  private urlApi: string;

  constructor(private _http: HttpClient) {
    this.urlApi = environment.urlApiCubos;
  }

  getCompras(): Observable<any> {
    var request = "api/compra/comprasusuario";
    var token = localStorage.getItem('token');
    var header = new HttpHeaders().set('Authorization', 'bearer ' + token);
    return this._http.get(this.urlApi + request, { headers: header });
  }
  insertarPedido(id: number): Observable<any> {
    var request = "api/compra/insertarpedido/" + id;
    var token = localStorage.getItem('token');
    var header = new HttpHeaders().set('Authorization', 'bearer ' + token);
    return this._http.post(this.urlApi + request, {}, { headers: header });
  }
}
