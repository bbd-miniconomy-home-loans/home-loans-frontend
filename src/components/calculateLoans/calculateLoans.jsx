import TextInput from '@leafygreen-ui/text-input';
import {NumberInput} from '@leafygreen-ui/number-input';
import Button from '@leafygreen-ui/button';
import React from 'react';
import { displayDough } from '../../common';


export const InstallmentCalculator = () => {

  const [loanAmount, setLoanAmount] = React.useState(1000);
  const [downAmount, setDownAmount] = React.useState(0);
  const [loanName, setLoanName] = React.useState('');
  const [interestRate, setInterestRate] = React.useState(0.1275);
  const [duration, setDuration] = React.useState(12);
  const [durationType, setDurationType] = React.useState('Months');


  const calculateMonthlyPayment = () => {

    const principal = loanAmount - downAmount;
    const interestPerPeriod = interestRate / 12;
    const numberOfPayments = duration * (durationType == 'Years' ? 12 : 1);

    const monthlyRepayment = principal * (interestPerPeriod * Math.pow(1 + interestPerPeriod, numberOfPayments)) / (Math.pow(1 + interestPerPeriod, numberOfPayments) - 1)

    return monthlyRepayment;

  };

  return (
    <>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '10px', maxWidth: '100%', margin: '0 auto'}}> 
        <div>
          <TextInput
            disabled={true}
            placeholder='0123233323'
            label='Loaning Identification Number'
            onChange={(event) => setLoanAmount(event.target.value)}
          />

          <TextInput
            label='Loan Amount (🅱️)'
            placeholder='1000'
            onChange={(event) => setLoanAmount(event.target.value == '' ? '1000' : event.target.value)}
          />

          <TextInput
            label='Down Payment (🅱️)'
            placeholder='0'
            onChange={(event) => setDownAmount(event.target.value ?? event.target.value == '' ? '0' : event.target.value)}
          />

          <NumberInput
            placeholder={durationType == 'Months' ? '12' : '1'}
            label='Loan Duration'
            unit={durationType}
            unitOptions={[
              {
                displayName : "Years",
                value : "Years"
              },
              {
                displayName : "Months",
                value : "Months"
              }
            ]}
            onSelectChange={(unit) => {setDurationType(unit.value)}}
            onChange={(event) => setDuration(event.target.value)}
          />

          <TextInput
            label='Loan Name'
            optional={true}
            onChange={(event) => setLoanName(event.target.value ?? event.target.value == '' ? '0' : event.target.value)}
          />

        </div>
        <div style={{textAlign: 'center'}}>
          <h4>At an interest rate of {interestRate * 100}%</h4>
          <Button variant={'baseGreen'} size='large'>
            Your repayment would be {displayDough(calculateMonthlyPayment())} * per month
          </Button>
          <body>* This is an estimated monthly repayment amount. Subject to change with the prime interest rate</body>
        </div>
      </div>
    </>
  );
}
