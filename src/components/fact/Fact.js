import React from "react";
import { Paper } from "@material-ui/core";
import "./Fact.css";


function Fact(props) {
    return (
        <Paper className="fact">
            {props.text}
        </Paper>
    );
}

export default Fact;
