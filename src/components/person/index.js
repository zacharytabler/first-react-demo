import React, { useState } from "react";
import { Link } from "react-router-dom";

const Person = ({ person }) => {
  const [age, setAge] = useState(person.age);

  return (
    <div>
      <Link to={`/people/${person.slug}`}>{person.name}</Link>
      <h4>Age: {age}</h4>
      <button onClick={() => setAge(age - 1)}>Make Younger</button>
    </div>
  );
};

export default Person;
