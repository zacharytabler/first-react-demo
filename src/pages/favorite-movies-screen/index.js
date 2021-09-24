import React from "react";
import { useParams } from "react-router-dom";

const FavoriteMoviesScreen = ({ people }) => {
  const { slug } = useParams();

  return (
    <div>
      <h1>My Favorite Movies</h1>
      {people
        .filter((person) => person.slug === slug)
        .map((person, index) => (
          <h3 key={index}>{person.favoriteMovies}</h3>
        ))}
    </div>
  );
};

export default FavoriteMoviesScreen;
