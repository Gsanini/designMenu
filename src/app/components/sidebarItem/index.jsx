import React from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function SidebarItem({
  icon,
  label,
  arrow = true,
  isSelected,
  onClick,
}) {
  return (
    <div
      onClick={() => onClick(label)}
      className={`flex items-center justify-between w-full px-4 py-2 rounded-[10px] transition-all duration-250 ease-in-out cursor-pointer 
        ${
          isSelected
            ? "bg-[#5a58583d] text-caribbean"
            : "text-gray-400 hover:bg-[#5a58583d] hover:text-caribbean"
        }
        `}
    >
      <div className="flex items-center">
        <div className="text-[17px]">{icon}</div>
        <span className="ml-2 text-[12px] z-1 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {label}
        </span>
      </div>

      {arrow && (
        <div
          className={`ml-5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300  ${
            isSelected ? "rotate-180" : "rotate-0"
          }`}
        >
          <IoIosArrowDown size={12} />
        </div>
      )}
    </div>
  );
}
