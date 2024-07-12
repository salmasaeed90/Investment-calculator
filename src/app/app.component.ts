import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { InputData } from './investment.modal';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
}
