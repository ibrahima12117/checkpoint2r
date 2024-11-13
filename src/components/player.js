// src/components/Player.js
import React from 'react';
import { Card } from 'react-bootstrap';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Équipe: {team}</Card.Text>
        <Card.Text>Nationalité: {nationality}</Card.Text>
        <Card.Text>Numéro de maillot: {jerseyNumber}</Card.Text>
        <Card.Text>Âge: {age}</Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.defaultProps = {
  name: "Nom inconnu",
  team: "Équipe inconnue",
  nationality: "Nationalité inconnue",
  jerseyNumber: "N/A",
  age: "N/A",
  imageUrl: "https://via.placeholder.com/150"
};

export default Player;
