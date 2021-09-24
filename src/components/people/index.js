import React from "react";

const People = ({ people }) => {
  return people.map((person) => {
    return (
      <div key={person.personId}>
        <h2>{person.name}</h2>
        <h3>{person.age}</h3>
        <p>Favorite movies: {person.favoriteMovies}</p>
      </div>
    );
  });
};

export default People;
