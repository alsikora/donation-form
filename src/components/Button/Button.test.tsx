import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button', () => {
  it('renders with the correct title', () => {
    const title = 'Click Me!';
    render(<Button title={title} theme='light' />);

    const button = screen.getByRole('button', { name: title });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(title);
  });

  it('applies the light theme class correctly', () => {
    const title = 'Click Me!';
    render(<Button title={title} theme='light' />);

    const button = screen.getByRole('button', { name: title });
    expect(button.className).toContain('button--light');
  });

  it('applies the dark theme class correctly', () => {
    const title = 'Click Me!';
    render(<Button title={title} theme='dark' />);

    const button = screen.getByRole('button', { name: title });
    expect(button.className).toContain('button--dark');
  });
});
