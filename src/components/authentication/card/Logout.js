import React from 'react';
import LogoutContent from 'components/authentication/LogoutContent';

import AuthCardLayout from 'layouts/AuthCardLayout';
import { useEffect } from 'react';
import { dropUser } from 'uiniqu/base';

const Logout = () => {
  useEffect(() => {
    dropUser();
  });
  return (
    <AuthCardLayout>
      <div className="text-center">
        <LogoutContent layout="card" titleTag="h3" />
      </div>
    </AuthCardLayout>
  );
};

export default Logout;
