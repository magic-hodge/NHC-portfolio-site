import React from 'react';

function MessageButton() {
    return(
        <div className="message-box">
            <a className="message-button" href="mailto:nick@nickhodgecircus.com">
                <i className="fas fa-envelope"/>
                Message Me
            </a>
        </div>
    );
}

export default MessageButton;