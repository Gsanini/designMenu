import React from "react";
import NavMenu from "../navMenu";
import UserMenu from "../userMenu";

export default function Layout({ children }) {
  return (
    <div className="h-screen w-full bg-dark-green flex relative">
      <NavMenu />
      <div className="bg-offWhite w-full h-[calc(100%-10px)] overflow-auto rounded-tl-[35px] mt-[10px] p-7">
        <UserMenu children={children} />
      </div>
    </div>
  );
}
