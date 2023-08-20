import React from 'react';


interface Blur {
    classes?: string
    click?: () => void
}

const Blur = ({click, classes}: Blur) => {
    return <div className={classes} onClick={click}></div>
};

export default Blur;