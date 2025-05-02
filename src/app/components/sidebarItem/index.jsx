import { GlobalContext } from "@/app/context/globalContext";
import { Separator } from "@/components/ui/separator";
import React, { useContext, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function SidebarItem({
  icon,
  label,
  arrow = true,
  isSelected,
  onClick,
  children,
  isHovered,
}) {
  const { updateSelectedItem, updateMenuName } = useContext(GlobalContext);
  const contentRef = useRef(null);

  const handleToggle = () => {
    onClick(label);
  };

  const handleClickItemMenu = (labelItem) => {
    updateSelectedItem(labelItem);
    updateMenuName(label);
  };

  return (
    <div className="flex w-full flex-col z-1">
      <div
        onClick={handleToggle}
        className={`flex items-center justify-between w-full px-4 py-2 rounded-[10px] transition-all duration-300 ease-in-out cursor-pointer 
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
            className={`ml-5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 z-1 ${
              isSelected ? "rotate-180" : "rotate-0"
            }`}
          >
            <IoIosArrowDown size={12} />
          </div>
        )}
      </div>
      {children && (
        <div
          ref={contentRef}
          className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
          style={{
            maxHeight:
              isSelected && isHovered
                ? `${contentRef.current?.scrollHeight}px`
                : "0px",
          }}
        >
          <div className="ml-6 flex">
            <div className="py-2">
              <Separator orientation="vertical" className="bg-gray-600" />
            </div>
            <div className="ml-[-5px]">
              {children.map((child, index) => (
                <div
                  onClick={() => handleClickItemMenu(child.label)}
                  key={index}
                  className={`flex items-center justify-between w-full px-4 py-[6px] rounded-[10px] transition-all duration-250 ease-in-out cursor-pointer text-gray-400 hover:text-caribbean`}
                >
                  <span className="ml-[7px] text-[12px] z-1 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {child.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
