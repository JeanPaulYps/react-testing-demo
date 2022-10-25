import { render, screen } from "@testing-library/react";
import { AsyncForm } from "../pages";

describe("Async form", () => {
  it("Should show gender", async () => {
    render(<AsyncForm />);
    const select = await screen.findByDisplayValue("Hombre");
    // const select = screen.getByDisplayValue("Hombre");
    expect(select).toBeInTheDocument();
  });
});
