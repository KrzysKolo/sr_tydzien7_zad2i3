import React, { useState, useEffect} from "react";
import UserList from "./components/users/UserList";
import UserProfile from "./components/users/UserProfile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'react-placeholder/lib/reactPlaceholder.css';

const API = "https://randomuser.me/api/?results=10";

export default function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isErr, setIsErr] = useState(false);

  useEffect(() => {
    fetch(API)
        .then((res) => res.json())
        .then((data) => setUsers(data.results))
        .then(() => {
            setTimeout(() => {
              setIsLoading(true);
            }, 2000);
          })
        .catch(() => setIsErr(true))

  }, []);

  return (
    <div className="App">
     <ReactPlaceholder
        ready={state}
        type='media'
        rows={6}
        showLoadingAnimation
      >
        <UserList users={users} />
      </ReactPlaceholder>
    </div>
  );
}
