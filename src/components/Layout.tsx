import React from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
  currentPageSlug: string;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      {children}
      {/* add footer */}
    </div>
  );
};

export default Layout;
