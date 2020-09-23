import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { PrivateRoute } from './components/PrivateRoute';
import Login from "./components/Login";
import AuthContent from "./components/AuthContent";
import HeaderBar from "./components/HeaderBar";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/howto">
          <HeaderBar />
          <AuthContent />
        </PrivateRoute>
      </div>
    </Router>
  );
}

export default App;