import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  initialInvestment = signal('0')
  annualInvestment= signal('0');
  expectedReturn= signal('0');
  duration= signal('0');

  formData = output<{
    initialInvestment:string,
      annualInvestment:string,
      expectedReturn:string,
      duration:string,
  }>();




  onSubmit(){
    console.log('checked');
    
    const formData = {
      initialInvestment:this.initialInvestment(),
      annualInvestment:this.annualInvestment(),
      expectedReturn:this.expectedReturn(),
      duration:this.duration(),
      
    }
    console.log(formData);
    
    this.formData.emit(formData)
  }
}
