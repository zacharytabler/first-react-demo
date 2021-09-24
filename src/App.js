import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ContactScreen from "./pages/contact-screen";
import Error404 from "./pages/error-404-screen";
import HomeScreen from "./pages/home-screen";
import PeopleScreen from "./pages/people-screen";
import Header from "./components/header/index.js";
import Person from "./pages/person-screen";
import FavoriteMoviesScreen from "./pages/favorite-movies-screen";

const App = () => {
  const people = [
    {
      name: "Cliff",
      age: 21,
      personId: 0,
      slug: "cliff",
      favoriteMovies: ["Patton,", " The Equalizer,", " Trading Places"],
    },
    {
      name: "Rickie",
      age: 21,
      personId: 1,
      slug: "rickie",
      favoriteMovies: [
        "Avengers End Game,",
        " Avengers Infinity War,",
        " The Infinity Train",
      ],
    },
  ];

  const PageSwitch = () => (
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/contact" component={ContactScreen} />

      {/* pass a prop to handle state (data) */}
      <Route exact path="/people">
        <PeopleScreen people={people} />
      </Route>

      <Route exact path="/people/:slug">
        <Person people={people} />
      </Route>

      <Route exact path="/people/favorite-movies/:slug">
        <FavoriteMoviesScreen people={people} />
      </Route>

      <Route component={Error404} />
    </Switch>
  );

  return (
    <div>
      <BrowserRouter>
        <Header />
        <PageSwitch />
      </BrowserRouter>
    </div>
  );
};

export default App;
