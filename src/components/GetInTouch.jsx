import React from 'react';
import MessageButton from './MessageButton';
import styled from 'styled-components';

const Contact = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
padding-bottom: 15px;

h3 {
    padding-top: 5px;
    margin: 20px auto;
}

.message-button {
  display: block;
  width: 180px;
  margin: 20px auto;
  padding: 5px 15px;
  text-decoration: none;
  letter-spacing: 1px;
  /* font-family: 'Roboto Slab', serif; */
  text-transform: uppercase;
  border-radius: .25rem;
  background-color: #1e2022;
  color: #c9d6df;
  transition: 0.5s ease;
  box-shadow: 2px 2px;
}

.message-button:hover {
  background-color: #52616b;
  color: #1e2022;
  text-decoration: none;
}

.contact-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 25px;
  margin: 0 auto;
}

.fa-envelope {
  padding: 10px;
}

`;

function GetInTouch() {
    return(
        <Contact className="contact-block">
            <h3 className="contact-text">
                Get In Touch.
            </h3>
            <h4>
                I'm currently available for... Placeholder Text Here...

            </h4>
            <p>
                If you'd like to discuss, inquire about, get quote, etc... Placeholder Text Here...

            </p>
            <MessageButton/>
        </Contact>
    );
}

export default GetInTouch;