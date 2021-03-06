import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import renderer from 'react-test-renderer';
import Header from "../Header";

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

it("renders without crashing", () => {
    render(<Header />, container);
});

it("matches snapshot", () => {
    const component = renderer.create(<Header />).toJSON();
    expect(component).toMatchSnapshot();
})