import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('renders correctly and navigates to the expected URL', () => {
    render(<Navbar />);

    // Check if the logo image is rendered
    const logoImg = screen.getByRole('img');
    expect(logoImg).toBeInTheDocument();
    expect(logoImg).toHaveAttribute('alt', 'Natur.ally logo');

    // Check if the link navigates to the correct URL
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://www.shift4.com/');
    expect(link).toHaveAttribute('target', '_blank');
  });
});
