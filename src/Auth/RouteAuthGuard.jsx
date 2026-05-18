import React, { useContext } from 'react'
import { isLoginContext } from '../Contexts/IsLoginContext'
import { Navigate } from 'react-router';
export default function RouteAuthGuard({ children }) {
  const { logged } = useContext(isLoginContext);
  return (
    <div>
      {!logged ? children : <Navigate to={"/"} />
      }
    </div>
  )
}
