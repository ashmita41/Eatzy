import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom"




it("Should load Header Component with a login button", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button");
    expect(loginButton).toBeInTheDocument();

} );