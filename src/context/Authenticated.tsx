import { FC, ReactNode, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { tokenSelector } from 'selector/authSelector';

interface AuthenticatedProps {
  children: ReactNode;
}

const Authenticated: FC<AuthenticatedProps> = ({ children }) => {
  const token = useSelector(tokenSelector);
  const location = useLocation();
  const [requestedLocation, setRequestedLocation] = useState<string | null>(null);

  if (!token) {
    if (location.pathname !== requestedLocation) {
      setRequestedLocation(location.pathname);
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (requestedLocation && location.pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  return <>{children}</>;
};

export default Authenticated;
