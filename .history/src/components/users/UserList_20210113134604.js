import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from './../context/UserContext';
import { Route, Switch } from 'react-router-dom';
import  User from "./User";
import UserProfile  from "./UserProfile";
import { Error, Loading } from './../infoPage/';

const Users = () => {

  return (
    const { showSidebar } = useContext(UserContext);
    <div className="container-users ">
      {isLoading && <Loading/>}
      {isErr && <Error />}
      <Switch>
        <Route path="/" exact >
          <User />
        </Route>
        <Route path="/:id" exact component={UserProfile} >
          <UserProfile users={users} />
        </Route>
      </Switch>

    </div>
  );
};
export default Users;
