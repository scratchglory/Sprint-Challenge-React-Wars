import React from "react";
import PeopleCard from "./PeopleCard";
import styled from "styled-components";

const CardDetail = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default function PeopleList(props) {
  return (
    <CardDetail>
      {props.people.map(person => {
        return (
          <PeopleCard
            name={person.name}
            height={person.height}
            mass={person.mass}
            hairColor={person.hair_color}
            skinColor={person.skin_color}
            eyeColor={person.eye_color}
            birthYear={person.birth_year}
            gender={person.gender}
          />
        );
      })}
    </CardDetail>
  );
}
