import { Component, Input, input, signal } from '@angular/core';
import { InputData } from '../investment.modal';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment.component.html',
  styleUrl: './investment.component.css'
})
export class InvestmentComponent {

  @Input() calculator!:InputData ;
  calculatResult!:any[];
  ngonInit(){
    console.log(this.calculator);
    this.createCalculatResult();
  }
  

  createCalculatResult(){
    const annualInvestmentData = this.calculator.annualInvestment;
    const durationData = this.calculator.duration;
    const expectedReturnData = this.calculator.expectedReturn;
    let initialInvestmentData = this.calculator.initialInvestment;
    const resultData = [];

    for(let i = 0; i < Number(durationData); i++){
      const durationNum = i + 1;
      const interestEarnedInYear= Number(initialInvestmentData) *(Number(expectedReturnData)/100);
      initialInvestmentData +=  interestEarnedInYear+ annualInvestmentData!;
      const interest = 
      Number(initialInvestmentData)-Number(annualInvestmentData) *Number(durationData) -Number(initialInvestmentData);

      resultData.push({
        year: durationNum,
        interest: interestEarnedInYear,
        valueEndOfYear: initialInvestmentData,
        annualInvestment: annualInvestmentData,
        totalInterest: interest,
        totalAmountInvested: Number(initialInvestmentData) + Number(annualInvestmentData) * Number(durationNum),
      })
      this.calculatResult= resultData;
      console.log(this.calculator);
      console.log(this.calculatResult);
    }
  }
}
