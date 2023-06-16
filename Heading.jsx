import React from 'react';

function Heading(props) {
    return (
        <div>
            <h1 className="heading-title">{props.heading}</h1>
        </div>
    );
}

export default Heading;