import { Component, OnInit } from '@angular/core';
import { Compra } from 'src/app/models/Compra';
import { CompraService } from 'src/app/services/compra.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit{
  public compras: Array<Compra>;
  constructor(private _service: CompraService) {
    this.compras = [];
  }
  ngOnInit(): void {
    this.cargarCompras();
  }
  cargarCompras(): void {
    this._service.getCompras().subscribe((data) => {
      this.compras = data;
    });
  }
}
