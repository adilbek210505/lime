import React from 'react';
import {Simulate} from "react-dom/test-utils";
import click = Simulate.click;

interface Button {
    text?: string
    classes?: string
    icon?: any
    click?: React.MouseEventHandler<HTMLButtonElement> | undefined
}
const Button = ({text, classes,icon,click}: Button) => {
    return <button onClick={click} className={classes}>{icon}{text}</button>
};

export default Button;