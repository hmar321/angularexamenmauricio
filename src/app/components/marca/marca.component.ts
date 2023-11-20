import { Component, OnInit } from '@angular/core';
import { Cubo } from 'src/app/models/Cubo';
import { CuboService } from 'src/app/services/cubo.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.css']
})
export class MarcaComponent implements OnInit {
  public cubos: Array<Cubo>;
  public marca: string;
  constructor(private _service: CuboService, private _route: ActivatedRoute) {
    this.cubos = [];
    this.marca = "";
  }
  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      var aux=params["marca"];
      if (aux != null) {
        this.marca = aux;
      }
      this.cargarCubos();
    });
  }
  cargarCubos(): void {
    this._service.getCubosMarca(this.marca).subscribe((data)=>{
      this.cubos=data;
    });
  }
}
