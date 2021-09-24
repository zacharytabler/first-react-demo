import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import Person from "../../components/person";

const PersonScreen = ({ people }) => {
  const { slug } = useParams();

  return (
    <div>
      <h1>Welcome to the Person Page</h1>
      {people
        .filter((person) => person.slug === slug)
        .map((person, index) => (
          <div key={index}>
            <Person person={person} />
            <Link to={`/people/favorite-movies/${person.slug}`}>
              See my fav movies
            </Link>
          </div>
        ))}
    </div>
  );
};
export default PersonScreen;
