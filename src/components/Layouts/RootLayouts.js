import React from "react";
import Navber from "../ui/Navber";
import FooterSection from "../ui/FooterSection";

const RootLayouts = ({ children }) => {
  return (
    <div data-theme="light">
      <Navber />
      <main className="min-h-screen h-min-[100vh]">{children}</main>
      <FooterSection />
    </div>
  );
};

export default RootLayouts;
