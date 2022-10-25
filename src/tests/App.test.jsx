import { render, screen } from '@testing-library/react';
import userEvent  from '@testing-library/user-event';
import { App } from '../pages';


describe('App', () => {
  it('renders headline', () => {
    render(<App />);

    // screen.debug();
    expect(screen.getByText(/Click on the Vite and React logos to learn more/i)).toBeInTheDocument();

    // check if App components renders headline
  });
  it('Shoud show the button', () =>{
    render(<App />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  it('Shoud show advance the counter when click', async () =>{
    render(<App />);
    const button = screen.getByRole("button");
    userEvent.click(button);
    const text = await screen.findByText(/count is 1/);
    expect(text).toBeInTheDocument();
  })
});