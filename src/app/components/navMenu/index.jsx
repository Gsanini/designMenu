"use client";

import { useState } from "react";
import SidebarItem from "../sidebarItem";
import Image from "next/image";
import logo from "../../../../public/logo.png";
import { AiOutlineApi } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { LuFilePen } from "react-icons/lu";
import { GoGear, GoGraph } from "react-icons/go";
import { LuUserRound } from "react-icons/lu";

export default function NavMenu() {
  const [selectedItem, setSelectedItem] = useState("Dashboard");

  const handleItemClick = (label) => {
    if (label === selectedItem) {
      setSelectedItem("");
    } else {
      setSelectedItem(label);
    }
  };

  const handleItemClickItemNotArrow = () => {};

  return (
    <div className="group hover:w-80 w-20 text-white h-full transition-all duration-300 flex flex-col justify-between items-center py-5 px-4 ">
      <div className="flex flex-col items-center w-full">
        <div>
          <Image src={logo} alt="Logo" width={35} />
        </div>
        <div className="flex flex-col items-center w-full gap-1 mt-4">
          <SidebarItem
            icon={<RxDashboard />}
            label="Dashboard"
            isSelected={selectedItem === "Dashboard"}
            onClick={handleItemClick}
          />
          <SidebarItem
            icon={<LuFilePen />}
            label="Cadastros"
            isSelected={selectedItem === "Cadastros"}
            onClick={handleItemClick}
          />
          <SidebarItem
            icon={<LuUserRound />}
            label="Usuários"
            isSelected={selectedItem === "Usuários"}
            onClick={handleItemClick}
          />
          <SidebarItem
            icon={<GoGraph />}
            label="Produtividade"
            isSelected={selectedItem === "Produtividade"}
            onClick={handleItemClick}
          />
        </div>
      </div>
      <div className="flex flex-col items-center w-full gap-1">
        <SidebarItem
          icon={<GoGear />}
          label="Configurações"
          onClick={handleItemClickItemNotArrow}
          arrow={false}
        />
        <SidebarItem
          icon={<AiOutlineApi />}
          label="Logout"
          onClick={handleItemClickItemNotArrow}
          arrow={false}
        />
      </div>
    </div>
  );
}
