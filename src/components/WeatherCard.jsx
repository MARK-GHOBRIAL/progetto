import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const WeatherCard = ({ weather }) => {
  const { name, main, weather: weatherDetails, wind } = weather;

  return (
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {weatherDetails[0].main}
        </Card.Subtitle>
        <Card.Text>{weatherDetails[0].description}</Card.Text>
        <ListGroup variant="flush">
          <ListGroup.Item>Temperature: {main.temp}°C</ListGroup.Item>
          <ListGroup.Item>Humidity: {main.humidity}%</ListGroup.Item>
          <ListGroup.Item>Wind Speed: {wind.speed} m/s</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;
