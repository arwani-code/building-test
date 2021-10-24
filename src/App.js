import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import ByBreed from "./pages/byBreed";
import AllSubBreeds from "./pages/allSubBreeds";
import Collection from "./pages/collection";
import Image from "./pages/image";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/by-breed" component={ByBreed} />
        <Route path="/all-sub-breeds" component={AllSubBreeds} />
        <Route path="/collection" component={Collection} />
        <Route path="/images" component={Image} />
      </Switch>
    </Router>
  );
}

export default App;
