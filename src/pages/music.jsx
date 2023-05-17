import axios from 'axios';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import querystring from 'querystring';

const clientId = '10a4212061804fa0a92fa7eaa55b132a';
const redirectUri = 'http://localhost:3000/callback';
const authorizationEndpoint = 'https://accounts.spotify.com/authorize';
const tokenEndpoint = 'https://accounts.spotify.com/api/token';

const generateRandomString = (length) => {
  let text = '';
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

const base64UrlEncode = (str) => {
  let base64 = btoa(str);
  base64 = base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  return base64;
};

const sha256 = async (plain) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(plain);
  const digest = await window.crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
};

const IndexPage = () => {
  const router = useRouter();

  const handleLogin = async () => {
    const state = generateRandomString(16);
    const codeVerifier = generateRandomString(64);
    const codeChallenge = base64UrlEncode(await sha256(codeVerifier));

    const queryParams = querystring.stringify({
      response_type: 'code',
      client_id: clientId,
      scope: 'user-read-private user-read-email',
      redirect_uri: redirectUri,
      code_challenge_method: 'S256',
      code_challenge: codeChallenge,
      state,
    });

    const authorizationUrl = `${authorizationEndpoint}?${queryParams}`;

    window.localStorage.setItem('pkce_state', state);
    window.localStorage.setItem('pkce_code_verifier', codeVerifier);

    router.push(authorizationUrl);
  };

  useEffect(() => {
    const handleAuthorizationResponse = async () => {
      const error = router.query.error;
      const code = router.query.code;
      const state = router.query.state;

      if (error) {
        console.log('Error:', error);
        return;
      }

      if (code && state === window.localStorage.getItem('pkce_state')) {
        const codeVerifier = window.localStorage.getItem('pkce_code_verifier');

        const data = {
          grant_type: 'authorization_code',
          code,
          redirect_uri: redirectUri,
          client_id: clientId,
          code_verifier: codeVerifier,
        };

        try {
          const response = await axios.post(tokenEndpoint, querystring.stringify(data));
          console.log('Access Token:', response.data.access_token);
          console.log('Refresh Token:', response.data.refresh_token);
        } catch (error) {
          console.log('Token Error:', error);
        }
      } else {
        console.log('Authorization failed.');
      }
    };

    handleAuthorizationResponse();
  }, []);

  return (
    <div>
      <button onClick={handleLogin}>Login with Spotify</button>
    </div>
  );
};

export default IndexPage;
