import React from "react";
import Header from "./Header";
import LanguageSelector from "./LanguageSelector";
import AppProviders from "../providers/AppProviders";

const Layout = ({ children }) => {
  return (
    <AppProviders>
      <Header />

      <main className="bg-gray-200 min-h-screen">
        <div className="max-w-screen-md mx-auto h-screen flex items-center justify-center p-6">
          <div className="bg-white w-full p-2 py-8 rounded-lg shadow-lg space-y-8 relative">
            <LanguageSelector />

            {children}
          </div>
        </div>
      </main>
    </AppProviders>
  );
};

export default Layout;
