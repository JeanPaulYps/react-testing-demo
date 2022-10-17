import { render, screen } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';

import App from './App';

describe('App', () => {
  it('renders headline', () => {
    render(<App />);

    // screen.debug();
    expect(screen.getByText(/Click on the Vite and React logos to learn more/i)).toBeInTheDocument();

    console.log(matchers);

    // check if App components renders headline
  });
});