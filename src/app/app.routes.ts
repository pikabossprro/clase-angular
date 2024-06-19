import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const APP_ROUTE: Route[] = [
    {
        path:'',
        children:[
            {
                path:'home',
                title:'pagina PPrincipal',
                component: HomeComponent,
            },
            {
              path: 'Claims',
              loadChildren:() =>
                import('./claims/claim/claims.route').then((m)=> m.CLAIMS_ROUTE),
            }
        ]
    }
];
