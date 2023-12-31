// ChildComponent.js

import React from "react";

function ChildComponent(props) {
  // Access the data passed from the parent via props
  const { person } = props;
  // console.log(person);

  return (
    <div>
      <h2>Child Component</h2>

      {/* ternary operation for checking if person then show data else not */}

      {person ? (
        <>
          <p>Name: {person.name}</p>
          <p>Age: {person.age}</p>
        </>
      ) : (
        <>
          <p>no data</p>
          <p>parent is not sending the data</p>
        </>
      )}
    </div>
  );
}

export default ChildComponent;