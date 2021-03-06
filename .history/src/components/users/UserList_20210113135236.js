import React, { useContext } from 'react';
import { UserContext } from './../context/UserContext';
import { Route, Switch } from 'react-router-dom';
import  User from "./User";
import UserProfile  from "./UserProfile";
import { Error, Loading } from './../infoPage/';

const Users = () => {


  return (

    <div className="container-users ">


      <Switch>
        <Route path="/" exact >
          <User />
        </Route>
        <Route path="/:id" exact component={UserProfile} >
          <UserProfile />
        </Route>
      </Switch>

    </div>
  );
};
export default Users;
