import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';s

const UserProfile = ({ users }) => {
	const { id } = useParams();
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
	return (
    <div>

    </div>
  )
}

export default UserProfile;
