import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/navbar.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import ExerciseList from "./components/exercise-list.component";
import EditExercise from "./components/edit-exercise.component";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
      <br />
      <Route path="/" exact component={ExerciseList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />

      </div>


    </Router>
  );
}

export default App;
