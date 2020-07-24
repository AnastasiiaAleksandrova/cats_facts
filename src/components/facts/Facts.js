import React from 'react';
import Fact from "../fact/Fact";
import "./Facts.css";
import { CircularProgress } from '@material-ui/core';




function Facts(props) {

    if (props.error) {
        return <div>ooops :(</div>
    } else if (props.progress) {
        return (
            <div className="progress">
                <CircularProgress />
            </div>
        )
    } else {
        return (
            <div className="facts">
                {props.facts.map(fact => (
                    <Fact key={fact.id} text={fact.text} />
                ))}
            </div>
        );
    }
}

export default Facts;
