import React from "react";

export default function PeopleList(props) {
  console.log(props.people);

  return (
    <div>
      {props.people.map(person => {
        return (
          <div>
            <h2>{person.name}</h2>
          </div>
        );
      })}
    </div>
  );
}
