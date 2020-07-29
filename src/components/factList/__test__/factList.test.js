import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import FactList from "../FactList";
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

jest.mock("../../fact/Fact", () => {
    return function DummyFact(props) {
        return (
            <div key={props.key}>
                {props.text}
            </div>
        );
    };
});

it("renders list of facts", () => {
    const facts = [
        { __id: "1", text: "one" },
        { __id: "2", text: "two" },
        { __id: "3", text: "three" }
    ];
    render(<FactList facts={facts} />, container);
    expect(container.textContent).toContain("one", "two", "three");

});

it("matches snapshot", () => {
    const facts = [
        { __id: "1", text: "one" },
        { __id: "2", text: "two" },
        { __id: "3", text: "three" }
    ];
    const component = renderer.create(<FactList facts={facts} />).toJSON();
    expect(component).toMatchSnapshot();
})