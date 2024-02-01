// components/ProtectedRoute.js
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import React from "react";

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const { state } = useAuth();

  // Redirect to login page if not authenticated
  React.useEffect(() => {
    if (!state.isAuthenticated) {
      router.push("/");
    }
  }, [state.isAuthenticated, router]);

  return <>{state.isAuthenticated && children}</>;
};

export default ProtectedRoute;
