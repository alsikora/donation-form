import { dateDifferenceInMonths } from './utils';

describe('dateDifferenceInMonths', () => {
  it('returns 0 for the same month and year', () => {
    const dateInitial = new Date(2023, 4); // May 2023
    const dateFinal = new Date(2023, 4); // May 2023
    expect(dateDifferenceInMonths(dateInitial, dateFinal)).toBe(0);
  });

  it('returns the correct difference in months for different years', () => {
    const dateInitial = new Date(2022, 4); // May 2022
    const dateFinal = new Date(2023, 4); // May 2023
    expect(dateDifferenceInMonths(dateInitial, dateFinal)).toBe(12);
  });

  it('returns the correct difference in months within the same year', () => {
    const dateInitial = new Date(2023, 0); // January 2023
    const dateFinal = new Date(2023, 5); // June 2023
    expect(dateDifferenceInMonths(dateInitial, dateFinal)).toBe(5);
  });

  it('returns 0 when the final date is before the initial date', () => {
    const dateInitial = new Date(2023, 5); // June 2023
    const dateFinal = new Date(2023, 0); // January 2023
    expect(dateDifferenceInMonths(dateInitial, dateFinal)).toBe(0);
  });
});
