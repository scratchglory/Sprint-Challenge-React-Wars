import React from "react";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

export default function PeopleCard(props) {
  return (
    <Card>
      <h2>{props.name}</h2>
    </Card>
  );
}
