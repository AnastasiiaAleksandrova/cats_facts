import React from "react";
import Fact from "../Fact";
import { render, unmountComponentAtNode } from "react-dom";
import renderer from 'react-test-renderer';

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

it("renders without crashing and contains a fact ", () => {
    render(<Fact text="This is a cat fact" />, container);
    expect(container.textContent).toBe("This is a cat fact");
});

it("matches snapshot", () => {
    const component = renderer.create(<Fact />).toJSON();
    expect(component).toMatchSnapshot();
})