import React from 'react';
import { Textfit } from 'react-textfit';
import { log } from 'util';

export default (props) => {
console.log('history loaded');

    return(
    <div className="screen--container">
        <Textfit
        max={40}
        throttle={60}
        mode="single"
        className="screen-top"
        >
            {props.expression} = {props.total}
        </Textfit>
    </div>
)}