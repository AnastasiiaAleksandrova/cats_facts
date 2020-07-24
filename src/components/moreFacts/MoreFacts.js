import React from "react";
import { Button } from "@material-ui/core";
import "./MoreFacts.css";


function MoreFacts(props) {
    return (
        <div className="more-facts">
            <div className="more-facts-text">Have not decided yet...</div>
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={props.onClick}>
                    Show me more facts
            </Button>
            </div>
        </div>
    );
}

export default MoreFacts;
