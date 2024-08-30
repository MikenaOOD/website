import React from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
  currentPageSlug: string;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="container">
      <Navbar />
      {children}
      {/* add footer */}
    </div>
  );
};

export default Layout;
