import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-claim-query',
  standalone: true,
  imports: [],
  templateUrl: './claim-query.component.html',
  styleUrl: './claim-query.component.scss'
})
export class ClaimQueryComponent {

  constructor(private router: Router){}

      returnmain(): void {
        this.router.navigate(['/Claims/main']);
    }
    notification(): void {
      this.router.navigate(['/Claims/notificar']);
  }
}