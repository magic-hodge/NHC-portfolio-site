import React from 'react';
import styled from 'styled-components';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';


const Disciplines = styled.div`
    .card-deck {
        margin: 0 auto;
        padding: 25px;
    }

    .card {
        background-color: #1e2022;
        color: #f0f5f9;
    }

    .card-link {
        margin: 0 auto;
        padding: 45px;
    }

    .card-link:hover {
        color:
    }
`;

function DisciplinesBlock() {
    return(
        <Disciplines className="disciplines-block">
            <h3>
                Disciplines.
            </h3>
            <CardDeck>
                <Card style={{ width: '22.5rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Cyr Wheel</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Card.Link href="#">Photos</Card.Link>
                        <Card.Link href="#">Videos</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '22.5rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Aerial Rope</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Card.Link href="#">Photos</Card.Link>
                        <Card.Link href="#">Videos</Card.Link>
                    </Card.Body>
                </Card>
            </CardDeck>
        </Disciplines>
    );
}

export default DisciplinesBlock;