import React from 'react';
import {Simulate} from "react-dom/test-utils";
import click = Simulate.click;

interface Button {
    text?: string
    classes?: string
    icon?: any
    click?: React.MouseEventHandler<HTMLButtonElement> | undefined
    styles?: any
}
const Button = ({text, classes,icon,styles,click}: Button) => {
    return <button style={styles} onClick={click} className={classes}>{icon}{text}</button>
};

export default Button;