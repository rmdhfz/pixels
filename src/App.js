import React from 'react';
import List from './containers/List';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DetailPage from "./pages/detail";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
   return (
      <Router>
        <Switch>
          <Route path="/" exact component={List} />
          <Route path="/movie/:movieId" exact component={DetailPage} />
        </Switch>
      </Router>
    );
}

export default App;
