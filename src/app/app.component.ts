import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { InvestmentComponent } from './investment/investment.component';
import { InputData } from './investment.modal';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormComponent, HeaderComponent, InvestmentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  calculator!:InputData;
 

  investmentData(formData:InputData){
    this.calculator = formData;
  console.log(this.calculator);
  }
}
