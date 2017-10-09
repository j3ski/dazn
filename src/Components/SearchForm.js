import React from 'react';

export default ({onChange, value}) => (
    <div>
        <span>Enter some text to start querying MovieDB!</span>
        <input type="text" onChange={ev => onChange(ev.target.value)}/>
    </div>
)