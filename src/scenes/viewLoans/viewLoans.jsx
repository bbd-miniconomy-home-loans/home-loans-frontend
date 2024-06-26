import Card from '@leafygreen-ui/card';
import Icon from '@leafygreen-ui/icon';
import Button from '@leafygreen-ui/button';
import Box from '@leafygreen-ui/box';
import FormFooter from '@leafygreen-ui/form-footer';
import {Tabs, Tab} from '@leafygreen-ui/tabs';
import { InstallmentCalculator } from '../../components/calculateLoans/calculateLoans';
import React from 'react';
import { LoanEntry } from '../../components/loanEntry/loanEntry';


export const ViewLoans = () => {

  const [showInstallmentCalc, setShowInstallmentCalc] = React.useState(false);

  return (
    <>
    <div className="ViewLoans" style={{gap: '2vh', display: 'flex', flexDirection: 'column', margin: '2vh'}}>
      <div style={{width: '95vw', height: '60vh', borderRadius: '2vh', alignSelf: 'center', overflow: 'hidden'}}>
        <div style={{backgroundImage: 'url(https://hips.hearstapps.com/hmg-prod/images/suburban-house-royalty-free-image-1584972559.jpg)', backgroundColor: '#cccccc', backgroundPosition: 'center', filter: 'grayscale(100%) brightness(50%) hue-rotate(180deg)', width: '100%', height: '100%'}}/>
        <div style={{position: 'absolute', left: '10%', top: '20%', maxWidth: '30%'}}>
          <Card darkMode={true} >
            <h3>Your next home, now</h3>
            <p>When financing your home, invest with the best. With interest rates as low as 0.5% above the prime interest rate, you can be assured your home is in the hands of the best</p>
            <Button variant={'primary'} rightGlyph={<Icon glyph='ArrowRight'/>} onClick={() => {window.location = '#apply'}}>
              Apply Now
            </Button>
          </Card>
        </div>
      </div>
      
      <Card>
        <h2>Your Loans</h2>

        <LoanEntry
          loanName={'Loan Name'}
          amountOutstanding={'Outstanding Amount'}
          repayAmount={'Repayment Amount'}
          status={'repaying'}

          asHeader={true}
        />

        <LoanEntry
          loanName={'24 Westmeister Ave.'}
          amountOutstanding={123123123.5032}
          repayAmount={12000.1232}
          status={'fulfilled'}
        />


<LoanEntry
          loanName={'24 Westmeister Ave.'}
          amountOutstanding={123123123.5032}
          repayAmount={12000.1232}
          status={'pending'}
        />


<LoanEntry
          loanName={'24 Westmeister Ave.'}
          amountOutstanding={123123123.5032}
          repayAmount={12000.1232}
          status={'denied'}
        />


<LoanEntry
          loanName={'24 Westmeister Ave.'}
          amountOutstanding={123123123.5032}
          repayAmount={12000.1232}
          status={'repaying'}
        />


<LoanEntry
          loanName={'24 Westmeister Ave.'}
          amountOutstanding={123123123.5032}
          repayAmount={12000.1232}
          status={'repaying'}
        />

      </Card>

      <Card>
        <h2 id='apply'>Apply for a Loan</h2>
        <InstallmentCalculator/>
      </Card>
    </div>
    <Box>
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', textAlign: 'center', backgroundColor: '#001E2B',
    borderTop: '1px solid #3D4F58',
    boxShadow: '0px -1px 4px 0px rgba(0, 0, 0, 0.25)', fontFamily: "'Euclid Circular A', 'Helvetica Neue', Helvetica, Arial, sans-serif", color: 'white', padding: '2vh'}}>
      <div>
          <h2>Contact Us</h2>
          <p>Have questions? We're here to help. Contact our friendly team today to discuss your home loan options and find the best solution for you.</p>
      </div>
      <div>
          <h2>Connect With Us</h2>
          <p>Stay updated on the latest news and tips in home financing. Follow us on [social media platforms] for more insights and updates.</p>
      </div>
      <div>
          <h2>Privacy Policy | Terms of Service</h2>
          <p>Learn more about how we protect your information and the terms of using our services. Read our privacy policy and terms of service.</p>
      </div>
    </div>
    </Box>

    </>
  );
}
