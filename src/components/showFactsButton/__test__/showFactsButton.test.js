import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import renderer from 'react-test-renderer';
import ShowFactsButton from "../ShowFactsButton";


let container = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

const dummyOnClick = jest.fn();
dummyOnClick.mockReturnValue(true);


it("renders without crashing", () => {
    render(<ShowFactsButton onClick={dummyOnClick} />, container);
});

it("calls a callback from props", () => {
    render(<ShowFactsButton onClick={dummyOnClick} />, container);
    const button = document.getElementById("show-more-facts");
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    expect(dummyOnClick).toHaveBeenCalledTimes(1);
});

it("matches snapshot", () => {
    const component = renderer.create(<ShowFactsButton />).toJSON();
    expect(component).toMatchSnapshot();
})



