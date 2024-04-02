import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MonthPicker from './MonthPicker';
import { TODAY } from '../../utils/constants';
import * as utils from '../../utils/utils';

jest.mock('../../utils/utils', () => ({
  monthDate: {
    format: jest.fn(),
  },
}));

describe('MonthPicker', () => {
  const handleChange = jest.fn();
  // Use casting to define the mock function with its type
  const mockFormat = utils.monthDate.format as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
    // Set up a consistent return value for the mocked format function
    mockFormat.mockReturnValue('January');
  });

  it('renders with the current month and year', () => {
    render(<MonthPicker onChange={handleChange} />);

    expect(screen.getByText('January')).toBeInTheDocument();
    expect(screen.getByText(TODAY.getFullYear().toString())).toBeInTheDocument();
  });

  it('disables the prev button if the selected date is not past TODAY', () => {
    render(<MonthPicker onChange={handleChange} />);
    const prevButton = screen.getByRole('button', { name: /previous/i });
    expect(prevButton).toBeDisabled();
  });

  it('updates month/year on next button click', () => {
    render(<MonthPicker onChange={handleChange} />);
    const nextButton = screen.getByRole('button', { name: /next/i });
    fireEvent.click(nextButton);

    // Expect the onChange to be called with the next month
    expect(handleChange).toHaveBeenCalledWith(new Date(TODAY.getFullYear(), TODAY.getMonth() + 1));
  });
});
