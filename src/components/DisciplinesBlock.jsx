import React from 'react';
import styled from 'styled-components';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import HeadSupport from '../images/head_support_width.jpg';
import WrapPose from '../images/wrap_pose1.jpg';



const Disciplines = styled.div`
    .card-deck {
        margin: 0 auto;
        padding: 25px;
    }

    .card {
        background-color: #1e2022;
        color: #c9d6df;
        
    }

    .card-body {
    }

    .btn {
        margin: .5rem 3rem;
        background-color: #1e2022;
        color: #c9d6df;
        border: 1px solid #c9d6df;
        transition: 0.3s ease;
        width: 30%;
    }

    .btn:hover {
        background-color: #c9d6df;
        color: #1e2022;   
    }

    @media screen and (max-width:768px) {
        .btn {
            margin: .5rem 2rem;
        }
    }

    @media screen and (max-width:1024px) {
        .btn {
            margin: .5rem 1.5rem;
        }
    }
`;

function DisciplinesBlock() {
    return(
        <Disciplines className="disciplines-block">
            <h3>
                Disciplines.
            </h3>
            <CardDeck>
                <Card style={{ width: '22.5rem'}}>
                    <Card.Img variant="top" src={HeadSupport} />
                    <Card.Body>
                        <Card.Title>Cyr Wheel</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <div className="text-center">
                        <Button href="#photos">Photos</Button>
                        <Button href="#videos">Videos</Button>
                        </div>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={WrapPose} />
                    <Card.Body>
                        <Card.Title>Aerial Rope</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <div className="text-center">
                        <Button href="#photos">Photos</Button>
                        <Button href="#videos">Videos</Button>
                        </div>
                    </Card.Body>
                </Card>
            </CardDeck>
        </Disciplines>
    );
}

export default DisciplinesBlock;