
import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Index from '../pages/Index';

const AuthForm = () => {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="min-h-screen">
          {/* Add a simple header with sign out button */}
          <div className="bg-olive-dark p-4 flex justify-between items-center">
            <span className="text-white">Welcome, {user?.username}</span>
            <button 
              onClick={signOut}
              className="bg-orange hover:bg-orange-light text-white px-4 py-2 rounded transition-colors"
            >
              Sign Out
            </button>
          </div>
          
          {/* Render the main app content */}
          <Index />
        </div>
      )}
    </Authenticator>
  );
};

export default AuthForm;
