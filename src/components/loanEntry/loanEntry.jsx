/* eslint-disable react/prop-types */
import TextInput from '@leafygreen-ui/text-input';
import {NumberInput} from '@leafygreen-ui/number-input';
import Badge from '@leafygreen-ui/badge';
import Icon from '@leafygreen-ui/icon';
import Button from '@leafygreen-ui/button';
import React from 'react';
import { displayDough } from '../../common';


export const LoanEntry = ({
  loanName,
  amountOutstanding,
  repayAmount,
  status,
  asHeader = false,
}) => {

  let badgeVariant = 'darkgray';

  switch (status)
  {
    case 'fulfilled':
      badgeVariant = 'green';
      break;
    case 'pending':
      badgeVariant = 'yellow';
      break;
    case 'denied':
      badgeVariant = 'red';
      break;
    case 'repaying':
      badgeVariant = 'orange';
      break;
  }


  return (
    <div style={{borderBottom: '1px solid #aaa'}}>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '10px', maxWidth: '100%', margin: '0 auto', fontWeight: asHeader && 'bold' || 'normal', alignItems: asHeader && 'none' || 'center'}}> 
        <p>{loanName}</p>
        <p>{!asHeader && displayDough(amountOutstanding) || amountOutstanding}</p>
        <p>{!asHeader && displayDough(repayAmount) || repayAmount}</p>
        {!asHeader && <div><Badge variant={badgeVariant}>{status}</Badge></div> || <p>Status</p>} 
        {!asHeader && <div><Button variant={'primary'} rightGlyph={<Icon glyph='ArrowRight'/>}>View</Button></div> || <p></p>}
      </div>
    </div>
      );
}
