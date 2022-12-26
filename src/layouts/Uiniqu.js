import React, { useContext, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import is from 'is_js';
import MainLayout from './MainLayout';
import SettingsToggle from 'components/settings-panel/SettingsToggle';
import SettingsPanel from 'components/settings-panel/SettingsPanel';

import { toast, ToastContainer } from 'react-toastify';
import { CloseButton } from 'components/common/Toast';
import Logout from 'components/authentication/card/Logout';

import CardLogin from 'uiniqu/login/Login';
import Dashboard from 'uiniqu/dashboard/Dashboard';
import Agencies from 'uiniqu/agencies/Agencies';
import Users from 'uiniqu/users/Users';
import Tadarus from 'uiniqu/tadarus/Tadarus';
import Rote from 'uiniqu/rote/Rote';

import AppContext from 'context/Context';

const Uiniqu = () => {
  const HTMLClassList = document.getElementsByTagName('html')[0].classList;
  useContext(AppContext);

  useEffect(() => {
    if (is.windows()) {
      HTMLClassList.add('windows');
    }
    if (is.chrome()) {
      HTMLClassList.add('chrome');
    }
    if (is.firefox()) {
      HTMLClassList.add('firefox');
    }
  }, [HTMLClassList]);

  return (
    <>
      <Routes>
        {/*- ------------- Card ---------------------------  */}
        <Route path="authentication/login" element={<CardLogin />} />

        {/* //--- MainLayout Starts  */}
        <Route path="/logout" element={<Logout />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />

          <Route path="/agencies" element={<Agencies />} />
          <Route path="/users" element={<Users />} />
          <Route path="/tadarus" element={<Tadarus />} />
          <Route path="/rote" element={<Rote />} />
        </Route>

        {/* //--- MainLayout end  */}

        {/* <Navigate to="/errors/404" /> */}
        <Route path="*" element={<Navigate to="/errors/404" replace />} />
      </Routes>
      <SettingsToggle />
      <SettingsPanel />
      <ToastContainer
        closeButton={CloseButton}
        icon={false}
        position={toast.POSITION.BOTTOM_LEFT}
      />
    </>
  );
};

export default Uiniqu;
