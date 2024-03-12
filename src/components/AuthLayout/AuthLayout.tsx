import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { tokenSelector } from 'selector/authSelector';

export default function AuthLayout() {
  const token = useSelector(tokenSelector);

  if (token) {
    return <Navigate to="/users" replace />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}
