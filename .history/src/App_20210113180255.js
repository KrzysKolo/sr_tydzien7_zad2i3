import React, { useState, useEffect} from "react";
import UserList from "./components/users/UserList";
import UserProfile from "./components/users/UserProfile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactPlaceholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';

// const API = "https://randomuser.me/api/?results=10";

export default function App() {
/*

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isErr, setIsErr] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      fetch(API)
        .then((res) => res.json())
        .then((res) => {
          console.log(res.results);
          setUsers(res.results);
          setIsLoading(false);
        })
        .catch(() => {
          setIsErr(true);
					//sisLoading(false);
					clearTimeout(timer);
        });
    }, 2000);
  }, []); */
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={UserList} />
          <Route path="/:id" exact component={UserProfile} />
        </Switch>
      </Router>
    </div>
  );
}
