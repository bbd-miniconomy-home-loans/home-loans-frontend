export const displayDough = (amount) => {
    const centsValue = amount * 1024; // Convert dollars to cents
    const dollars = Math.floor(centsValue / 1024);

    const cents = Math.floor(centsValue % 1024);

    const integerSymbol = '🅱️';
    const centsSymbol = 'Ⓜ️';

    let displayString = '';

    if (dollars > 0) {
        displayString += dollars + integerSymbol;
    }

    if (cents > 0) {
        displayString += ' ' + cents + centsSymbol;
    }

    return displayString;
};
