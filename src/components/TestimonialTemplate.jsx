import React from 'react';

function TestimonialTemplate(props) {
    return(
        <div>
            <h4>"{props.tagline}"</h4>
            <p>"{props.text}"</p>
            <p>- {props.source}</p>
        </div>
    );
}

export default TestimonialTemplate;