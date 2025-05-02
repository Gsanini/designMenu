"use client";

import { IoMoonOutline, IoNotificationsOutline } from "react-icons/io5";
import IconsHover from "../hoverComponents/iconsHover";
import { Input } from "@/components/ui/input";
// import { FiSun } from "react-icons/fi";
// import Image from "next/image";
// import logoEquatorial from "../../../../public/equatorial_escrita.png";
import { Separator } from "@/components/ui/separator";
import { IoSearchOutline } from "react-icons/io5";
import { useContext } from "react";
import { GlobalContext } from "@/app/context/globalContext";

export default function UserMenu({ children }) {
  const { menuName, selectedItem } = useContext(GlobalContext);

  return (
    <div>
      <div className="text-dark-green flex justify-between gap-5">
        <div>
          <div className="flex items-center">
            <p className="text-[13px]">Páginas</p>
            <span className="ml-1 mr-1 text-[13px]">/</span>
            <p className="text-[13px]">{menuName}</p>
          </div>
          <div>
            <h1 className="text-[27px] font-[600]">{selectedItem}</h1>
          </div>
        </div>
        <div className="h-[55px] bg-white90 rounded-[25px] shadow-[0px_8px_22px_0px_rgba(0,_46,_31,_0.1)]">
          <div className="flex items-center justify-end w-full h-full px-3 py-3 gap-3">
            {/* <div>
              <Image src={logoEquatorial} alt="Logo" width={75} />
            </div>
            <Separator orientation="vertical" /> */}
            <div>
              <Input
                className="rounded-full bg-gray-100 border-none w-50  text-gray-600"
                placeholder="Buscar página..."
                icon={<IoSearchOutline size={14} />}
              />
            </div>
            <Separator orientation="vertical" />
            <div className="flex items-center gap-3">
              <div>
                <div className="w-[8px] h-[8px] bg-red-500 border-white border-[1px] rounded-full absolute ml-[8px]" />
                <IconsHover Icon={<IoNotificationsOutline size={17} />} />
              </div>
              <IconsHover Icon={<IoMoonOutline size={17} />} />
              {/* <IconsHover Icon={<FiSun size={17} />} /> */}
            </div>

            <div className="w-10 h-10 bg-greenWhite rounded-full flex items-center justify-center hover:opacity-70 transition-all duration-300 ease-in-out cursor-pointer">
              <span className="font-[500] text-frog">GS</span>
            </div>
          </div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
