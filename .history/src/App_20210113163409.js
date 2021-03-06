import React, { useState, useEffect} from "react";
import UserList from "./components/users/UserList";
import { Loading, Error } from './components/infoPage/'
import "./components/sass/styles.scss";


export default function App() {

  const API = "https://randomuser.me/api/?results=10";
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
  }, []);
  return (
    <div className="App">
      {isLoading && <Loading/>}
      {isErr && <Error />}
      <UserList users={users} />
    </div>
  );
}
