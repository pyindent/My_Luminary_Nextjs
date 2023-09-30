import { Auth0Provider } from '@auth0/auth0-react';


const providerConfig = {
    domain: 'dev-6wfmyrzd8pj2qewp.us.auth0.com',
    clientId: 'aTdnve44aHq3vMFF7zcKu3O2bxLJ4Jzq',
    authorizationParams: {
      redirect_uri: process.env.NEXT_PUBLIC_URI,
    },
  };

export const Auth0ProviderWithHistory = ({ children }) => {

  return (
    <Auth0Provider
        {...providerConfig}
    >
      {children}
    </Auth0Provider>
  );
};