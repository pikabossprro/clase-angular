import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-query-notification',
  standalone: true,
  imports: [],
  templateUrl: './query-notification.component.html',
  styleUrl: './query-notification.component.scss'
})
export class QueryNotificationComponent {
  constructor(private router: Router){}

  returnmain(): void {
    this.router.navigate(['/Claims/main']);
  }

  mostrarPopupCorreo() {
    Swal.fire({
      title: 'Ingrese su correo electrónico',
      input: 'email',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Enviar',
      cancelButtonText: 'Cancelar',
      showLoaderOnConfirm: true,
      preConfirm: (email) => {
        // Puedes validar o procesar el correo electrónico aquí
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(email);
          }, 2000);
        });
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `Correo electrónico ingresado: ${result.value}`,
          icon: 'success'
        });
      }
    });
  }

}

