import React, { memo } from 'react';
import isEqual from 'react-fast-compare';



import { useSelector } from 'react-redux';
import { authSelector } from 'selector/authSelector';


function Header() {
  const auth = useSelector(authSelector);
  return (
    <div>
      Header
    </div>
  );
}

export default memo(Header, isEqual);
