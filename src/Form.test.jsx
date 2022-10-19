import { render, screen } from "@testing-library/react";
import Form from "./Form";

describe('Form tests', () => {
    it('Should render input', () => {
        render(<Form />);
        const input = screen.getByLabelText("Nombre");
        expect(input).toHaveValue("");
    });
    it('Should render select', () => {
        render(<Form />);
        const select = screen.getByLabelText("Edad");
        expect(select).toHaveValue("");
    });
    
});