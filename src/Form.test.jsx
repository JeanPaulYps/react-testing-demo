import { prettyDOM, render, screen } from "@testing-library/react";
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
    it('Should render all inputs', () => {
        render(<Form />);
        const inputs = screen.getAllByRole("textbox");
        const selectors = screen.getAllByRole("combobox");
        const checkboxes = screen.getAllByRole("checkbox");
        expect(inputs).toHaveLength(1);
        expect(selectors).toHaveLength(1);
        expect(checkboxes).toHaveLength(2);
    });
    it('Should render all inputs', () => {
        render(<Form />);
        const allTypeOfInputs = screen.getAllByLabelText(/.*/);
        allTypeOfInputs.forEach(
            element => console.log(prettyDOM(element))
        )
        
        expect(allTypeOfInputs).toHaveLength(4);
        
    });
    it('Should get checkbox', ()=> {
        render(<Form />);
        const checkbox = screen.getByLabelText(/.*aceptas terminos y condiciones.*/i);
        expect(checkbox).toBeInTheDocument();
    } ) 
    
});