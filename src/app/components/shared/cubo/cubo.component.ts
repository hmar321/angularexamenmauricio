import { Component, Input } from '@angular/core';
import { Cubo } from 'src/app/models/Cubo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cubo',
  templateUrl: './cubo.component.html',
  styleUrls: ['./cubo.component.css']
})
export class CuboComponent {
  @Input() cubo!: Cubo;
  constructor(private _router: Router) {
  }
}
