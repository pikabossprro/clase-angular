import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  constructor(private router: Router){}

  registrarReclamacion(): void {
    this.router.navigate(['/Claims/registrar-reclamo']);
  }

  ConsultarReclamacion(): void{
    this.router.navigate(['/Claims/consultar-reclamo']);

  }

}
