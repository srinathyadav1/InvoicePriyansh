import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./pages";
import Invoice from "./components/App";
import { Header, Error } from "./pages";
import ProtectedApp from "./pages/ProtectedApp";
import { AuthProvider } from "./context/auth";
import Login from "./buttons/LogIn";  // Import the Login page

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          {/* Route for the login page */}
          <Route path="/" element={<Login />} />

          {/* Protected route for /billing */}
          <Route
            path="/billing"
            element={
              <ProtectedApp>
                <Invoice />
              </ProtectedApp>
            }
          />

          {/* Error page route */}
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
