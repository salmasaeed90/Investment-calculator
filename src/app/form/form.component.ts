import { CurrencyPipe } from '@angular/common';
import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  initialInvestment = signal('')
  annualInvestment= signal('');
  expectedReturn= signal('');
  duration= signal('');
  calculator!:any;
  calculatResult!:any[];

  onSubmit(){
    
    const formData = {
      initialInvestment:this.initialInvestment(),
      annualInvestment:this.annualInvestment(),
      expectedReturn:this.expectedReturn(),
      duration:this.duration(),
      
    }
    console.log(formData);
    
    this.calculator = formData;
    this.createCalculatResult();
    this.initialInvestment.set('')
    this.annualInvestment.set('');
    this.expectedReturn.set('');
    this.duration.set('');
  }
  
 
  ngOnInit(){
    
    this.createCalculatResult();
  }
  

  createCalculatResult(){
    const annualInvestmentData = this.calculator?.annualInvestment;
    const durationData = this.calculator?.duration;
    const expectedReturnData = this.calculator?.expectedReturn;
    let initialInvestmentData = this.calculator?.initialInvestment;
    const resultData = [];

    for(let i = 0; i < Number(durationData); i++){
      const durationNum = i + 1;
      const interestEarnedInYear= Number(initialInvestmentData) *(Number(expectedReturnData)/100);
      initialInvestmentData +=  interestEarnedInYear+ annualInvestmentData!;
      const interest = 
      Number(initialInvestmentData)+ Number(annualInvestmentData) * Number(durationData) - Number(initialInvestmentData);

      resultData.push({
        year: durationNum,
        interest: interestEarnedInYear,
        valueEndOfYear: initialInvestmentData,
        annualInvestment: annualInvestmentData,
        totalInterest: interest,
        totalAmountInvested: Number(initialInvestmentData) + Number(annualInvestmentData) * Number(durationNum),
      })
      this.calculatResult= resultData;
      console.log(this.calculatResult);
    }
  }
}
