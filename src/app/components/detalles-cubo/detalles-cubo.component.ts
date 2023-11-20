import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Comentario } from 'src/app/models/Comentario';
import { Cubo } from 'src/app/models/Cubo';
import { CuboService } from 'src/app/services/cubo.service';

@Component({
  selector: 'app-detalles-cubo',
  templateUrl: './detalles-cubo.component.html',
  styleUrls: ['./detalles-cubo.component.css']
})
export class DetallesCuboComponent implements OnInit {
  public idcubo!: number;
  public comentarios!: Array<Comentario>;
  public cubo!: Cubo;

  constructor(private _route: ActivatedRoute, private _service: CuboService) {

  }
  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      var id = parseInt(params['idcubo']);
      if (id != null) {
        this.idcubo = id;
      }
      this.cargarCubo();
      this.cargarComentarios();
    });
  }

  cargarComentarios(): void {
    this._service.findComentariosByIdCubo(this.idcubo).subscribe((data) => {
      this.comentarios = data;
    });
  }
  cargarCubo(): void {
    this._service.findCuboById(this.idcubo).subscribe((data) => {
      this.cubo = data;
    });
  }

}
