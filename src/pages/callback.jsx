import { useEffect, useState } from 'react';
import { parseCookies } from 'nookies';

const CallbackPage = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // Retrieve the access token from cookies
      const { access_token } = parseCookies();

      // Make an API call to fetch user details
      const response = await fetch('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUserDetails(data);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>User Details</h1>
      {userDetails ? (
        <>
          <p>Display Name: {userDetails.display_name}</p>
          <p>Email: {userDetails.email}</p>
          <p>Followers: {userDetails.followers.total}</p>
          {/* Display other user details as needed */}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CallbackPage;
