import React, { ReactNode } from "react";
import Header from "../common/Header";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      {/* Footer component can be added here */}
    </>
  );
}
