import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClaimRegisterComponent } from '../claims/claim/claim-register/claim-register.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ClaimRegisterComponent, UpperCasePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  title = 'zegel-angular-class-spa';
  name = 'Job Daniel Pacheco Carrasco';

  isListVisible:boolean=true;
  item: string[] = ['celular','pc','laptop','cooler','teclado']
  headerStyle ={
    'color': 'red',
    'font-family' : 'verdana, sans-serif'
  }

  parrafoClass ={
    'blue-text': true,
  }

  toggleVisibility(){
    this.isListVisible =! this.isListVisible;
  }
}


