import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Account from '../Account/Account'
const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (

    <div>
    {/*   <Account  picture={user.picture} /> */}
      { isAuthenticated && (
      <div>
       {/*  <img src={user.picture} alt={user.name} /> */}
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div> )
      }
    </div>

   
  );
};

export default Profile;