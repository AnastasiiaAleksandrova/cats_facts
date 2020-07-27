import React from "react";
import Fact from "../fact/Fact";
import "./FactList.css";

function FactList(props) {

    return (
        <div className="facts">
            {props.facts.map(fact => (
                <Fact key={fact._id} text={fact.text} />
            ))}
        </div>
    );

}

export default FactList;
