import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => {

    test("Should load contact us component", () => {
        render(<Contact />);
        const heading = screen.getByRole("heading");
    
        //Assertion
        expect(heading).toBeInTheDocument();
    });
    
    
    test("Should load button inside Contact component", () => {
        render(<Contact />);
        const button = screen.getByRole("button");
    
        //Assertion
        expect(button).toBeInTheDocument();
    });
    
    test("Should load submit text inside Contact component", () => {
        render(<Contact />);
        const button = screen.getByText("Submit");
    
        //Assertion
        expect(button).toBeInTheDocument();
    });
    
    test("Should load placeholder text inside Contact component", () => {
        render(<Contact />);
        const inputName = screen.getByPlaceholderText("name");
    
        //Assertion
        expect(inputName).toBeInTheDocument();
    });
    
    test("Should load 2 input boxes inside Contact component", () => {
        render(<Contact />);
        const inputBoxes = screen.getAllByRole("textbox");
    
        //Assertion
        expect(inputBoxes.length).toBe(2);
    });

})

