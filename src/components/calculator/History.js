import React from 'react';
import { Textfit } from 'react-textfit';

let initialState = {
    history: [],
}

export default (state = initialState, props) => {
    console.log('history loaded');
    // this.setState({
    //     history: `${props.expression} = ${props.total}`,
    // })

    this.setState(props => ({
            history: [...props.history, `${props.expression} = ${props.total}`]
        }))

    return(
    <div className="screen--container">
        <Textfit
        max={40}
        throttle={60}
        mode="single"
        className="screen-top"
        >
            {props.expression} = {props.total}
            <h1>History:</h1>
            <ol>
                {props.history.map(history => (
                    <li id="oneHistory">{history}</li>
                ))}
            </ol>
            <ol>
                <li>{props.expression} = {props.total}</li>
            </ol>
        </Textfit>
    </div>
)}