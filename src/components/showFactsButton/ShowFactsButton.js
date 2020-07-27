import React from "react";
import { Button } from "@material-ui/core";
import "./ShowFactsButton.css";


function ShowFactsButton(props) {
    if (!props.hide) {
        return (
            <div className="more-facts">
                <div className="more-facts-text">Have not decided yet...</div>
                <div>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={props.onClick}>
                        Show me other facts
                </Button>
                </div>
            </div>
        );
    } else {
        return null;
    }

}

export default ShowFactsButton;