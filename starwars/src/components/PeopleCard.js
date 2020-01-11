import React from "react";
import styled from "styled-components";
import { Card, CardText, CardTitle } from "reactstrap";

const CardInfo = styled.div`
  width: 300px;
  margin: 1%;
  border: 5px solid gold;
  background: black;
  opacity: 0.5;
  color: white;
  box-shadow: 0px 10px 10px red;
`;

export default function PeopleCard(props) {
  return (
    <CardInfo>
      <Card>
        <CardTitle>
          <h2>{props.name}</h2>
        </CardTitle>
        <CardText>Height: {props.height} cm</CardText>
        <CardText>Weight: {props.mass} kg</CardText>
        <CardText>Hair Color: {props.hairColor}</CardText>
        <CardText>Skin Color: {props.skinColor}</CardText>
        <CardText>Eye Color: {props.eyeColor}</CardText>
        <CardText>Birth Year:{props.birthYear}</CardText>
        <CardText>Gender: {props.gender}</CardText>
      </Card>
    </CardInfo>
  );
}
