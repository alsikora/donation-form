export const USDollar: Intl.NumberFormat = new Intl.NumberFormat('en-US');

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