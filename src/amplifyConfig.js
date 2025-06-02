
import { Amplify } from 'aws-amplify';

const amplifyConfig = {
  Auth: {
    Cognito: {
      // Replace these with your actual Cognito configuration
      userPoolId: 'your-user-pool-id', // e.g., 'us-east-1_abcd1234'
      userPoolClientId: 'your-user-pool-client-id', // e.g., '1example23456789'
      region: 'your-aws-region', // e.g., 'us-east-1'
      loginWith: {
        oauth: {
          domain: 'your-cognito-domain.auth.region.amazoncognito.com',
          scopes: ['email', 'profile', 'openid'],
          redirectSignIn: ['http://localhost:5173/'],
          redirectSignOut: ['http://localhost:5173/'],
          responseType: 'code'
        },
        username: true,
        email: true
      }
    }
  }
};

Amplify.configure(amplifyConfig);

export default amplifyConfig;
