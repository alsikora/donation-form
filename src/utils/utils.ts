export const USDollar: Intl.NumberFormat = new Intl.NumberFormat('en-US', {style: 'decimal'});

export const monthYearDate: Intl.DateTimeFormat = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  year: 'numeric'
});

export const monthDate: Intl.DateTimeFormat = new Intl.DateTimeFormat('en-US', {month: 'long'});

export const dateDifferenceInMonths = (dateInitial: Date, dateFinal: Date): number =>
    Math.max(
        (dateFinal.getFullYear() - dateInitial.getFullYear()) * 12 +
        dateFinal.getMonth() -
        dateInitial.getMonth(),
        0
    );

export const parseAmountToNumber = (amount: string): number => parseInt(amount.replace(/,/g, ''), 10);