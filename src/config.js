const authDomain = process.env.REACT_APP_AUTH_DOMAIN;
const authClientId = process.env.REACT_APP_AUTH_CLIENT_ID;

export const auth0Config = {
  domain: authDomain,
  clientId: authClientId
};