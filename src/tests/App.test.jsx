import { render, screen } from '@testing-library/react';
import { App } from '../pages';


describe('App', () => {
  it('renders headline', () => {
    render(<App />);

    // screen.debug();
    expect(screen.getByText(/Click on the Vite and React logos to learn more/i)).toBeInTheDocument();

    // check if App components renders headline
  });
});