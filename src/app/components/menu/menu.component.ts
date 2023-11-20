import { Component, OnInit } from '@angular/core';
import { CuboService } from 'src/app/services/cubo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public marcas: Array<string>;
  constructor(private _service: CuboService, private _router: Router) {
    this.marcas = [];
  }
  ngOnInit(): void {
    this.cargarMarcas();
  }
  cargarMarcas(): void {
    this._service.getMarcas().subscribe((data) => {
      this.marcas = data;
    });
  }

}
