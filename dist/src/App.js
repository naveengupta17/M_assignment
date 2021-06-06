import React from "react";
import './App.css';
import {Route, Switch} from "react-router-dom";
import Home from "./Home";
import Series from "./Series";
import Movies from "./Movies";
import Error from "./Error"

function App() {
  return (
   <>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Series" component={Series}/>
        <Route exact path="/Movies" component={Movies}/>
        <Route component={Error}/>
      </Switch>
     
   </>
  );
}

export default App;
