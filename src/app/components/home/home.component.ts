import { Component, OnInit } from '@angular/core';
import { Cubo } from 'src/app/models/Cubo';
import { CuboService } from 'src/app/services/cubo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public cubos: Array<Cubo>;
  constructor(private _service: CuboService) {
    this.cubos = [];
  }
  ngOnInit(): void {
    this.cargarCubos();
  }

  cargarCubos(): void {
    this._service.getCubos().subscribe((data) => {
      this.cubos = data;
    })
  }
}
