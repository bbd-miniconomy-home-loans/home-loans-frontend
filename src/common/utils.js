import { Symbols } from './constants';

export const displayDough = (amount) => {
  const centsValue = amount ;// * 1024; // Convert dollars to cents
  const dollars = Math.floor(centsValue / 1024);

  const cents = Math.floor(centsValue % 1024);

  let displayString = '';

  if (dollars > 0) {
    displayString += dollars + Symbols.BBDough;
  }

  if (cents > 0) {
    displayString += ` ${  cents  }${Symbols.MibiBBDough}`;
  }

  return displayString;
};
