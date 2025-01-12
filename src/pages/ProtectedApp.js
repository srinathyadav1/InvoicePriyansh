import React from "react";
import { useAuth } from "../context/auth";
import Login from "../buttons/LogIn";

export default function ProtectedApp({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Login />;
  }

  return <>{children}</>;
}
