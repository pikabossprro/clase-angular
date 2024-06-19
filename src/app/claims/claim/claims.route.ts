import { Route } from '@angular/router';
import { ClaimRegisterComponent } from './claim-register/claim-register.component';
import { MainComponent } from './main/main.component';
import { ClaimQueryComponent } from './claim-query/claim-query.component';

export const CLAIMS_ROUTE: Route[] = [
    {
        path:'',
        children:[
            {
                path:'registrar-reclamo',
                title:'Registrar reclamo',
                component: ClaimRegisterComponent,
            },
            {
              path: 'main',
              title: 'Gestion de reclamos',
              component: MainComponent,
            },
            {
                path: 'consultar-reclamo',
                title: 'Consultar reclamo',
                component: ClaimQueryComponent,
              }
              
        ]
    }
];
