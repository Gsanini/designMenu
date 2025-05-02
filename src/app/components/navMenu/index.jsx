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
  const [isHovered, setIsHovered] = useState(false);

  const handleItemClick = (label) => {
    if (label === selectedItem) {
      setSelectedItem("");
    } else {
      setSelectedItem(label);
    }
  };

  const handleItemClickItemNotArrow = () => {};

  const listaDashboards = [
    { label: "Visão Geral" },
    { label: "Produtividade" },
    { label: "Calendário" },
  ];

  const listaCadastros = [
    { label: "Cadastro de Usuários" },
    { label: "Cadastro de Produtos" },
    { label: "Cadastro de Clientes" },
    { label: "Cadastro de Fornecedores" },
  ];

  return (
    <div
      className="group hover:w-80 w-20 text-white h-full transition-all duration-300 flex flex-col justify-between items-center py-5 px-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
            children={listaDashboards}
            isHovered={isHovered}
          />
          <SidebarItem
            icon={<LuFilePen />}
            label="Cadastros"
            isSelected={selectedItem === "Cadastros"}
            onClick={handleItemClick}
            isHovered={isHovered}
            children={listaCadastros}
          />
          <SidebarItem
            icon={<LuUserRound />}
            label="Usuários"
            isSelected={selectedItem === "Usuários"}
            onClick={handleItemClick}
            isHovered={isHovered}
          />
          <SidebarItem
            icon={<GoGraph />}
            label="Produtividade"
            isSelected={selectedItem === "Produtividade"}
            onClick={handleItemClick}
            isHovered={isHovered}
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
