import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cubo } from 'src/app/models/Cubo';
import { CompraService } from 'src/app/services/compra.service';
import { CuboService } from 'src/app/services/cubo.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit{
  public idcubo!:string;
  public cubos: Array<Cubo>;
  constructor(private _cuboService:CuboService,private _compraService:CompraService,private _router:Router) {
    this.cubos = [];

  }
  ngOnInit(): void {
    this._cuboService.getCubos().subscribe((data)=>{
      this.cubos=data;
    });
  }

  realizarPedido():void{
    var aux=parseInt(this.idcubo);;
    this._compraService.insertarPedido(aux).subscribe(()=>{
      this._router.navigate(['/compras']);
    });
  }
}
