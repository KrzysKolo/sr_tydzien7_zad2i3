import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import UserContextProvider from './components/context/UserContext';
import UserContext from './components/contexts/UserContext';
import UserList from "./components/users/UserList";
import "./components/sass/styles.scss";

export default function App() {
  return (
    <Router>
      <div className="App">
        <UserContextProvider>
          <UserList />
        </UserContextProvider>
      </div>
    </Router>
  );
}
