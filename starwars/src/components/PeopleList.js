import React from "react";
import PeopleCard from "./PeopleCard";

export default function PeopleList(props) {
  console.log(props.people);

  return (
    <div>
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
    </div>
  );
}
