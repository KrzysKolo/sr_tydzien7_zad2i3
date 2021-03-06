import React from 'react';
import { Link, useParams } from 'react-router-dom';
import User from './User';

function UserDetails({ users }) {
  const { id } = useParams();
  const user = users.filter((user) => user.login.uuid === id)[0];
  return (
    <div className='user__details'>
      <h4>
        <Link to='/'>Back Home</Link>
      </h4>
      <User user={user} />
	  <h3>{users.name.first}</h3>

    </div>
  );
}

export default UserDetails;
