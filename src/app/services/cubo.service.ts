import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CuboService {
  private urlApi: string;

  constructor(private _http: HttpClient) {
    this.urlApi = environment.urlApiCubos;
  }

  getCubos(): Observable<any> {
    var request = "api/cubos";
    return this._http.get(this.urlApi + request);
  }

  getMarcas(): Observable<any> {
    var request = "api/cubos/marcas";
    return this._http.get(this.urlApi + request);
  }

  getCubosMarca(marca: string): Observable<any> {
    var request = "api/cubos/cubosmarca/" + marca;
    return this._http.get(this.urlApi + request);
  }

  findComentariosByIdCubo(id: number): Observable<any> {
    var request = "api/comentarioscubo/getcomentarioscubo/" + id;
    return this._http.get(this.urlApi + request);
  }
  findCuboById(id: number): Observable<any> {
    var request = "api/cubos/" + id;
    return this._http.get(this.urlApi + request);
  }
}
