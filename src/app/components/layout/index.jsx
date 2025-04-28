import IconBox from "../boxIcon";
import { FiLayout } from "react-icons/fi";
import { BsHouse } from "react-icons/bs";
import { GoFileCode } from "react-icons/go";
import { IoMoveOutline } from "react-icons/io5";
import { VscDebugDisconnect } from "react-icons/vsc";
import logo from "../../../../public/logo.png";
import Image from "next/image";

export default function Layout({ children }) {
  return (
    <div className='h-screen w-full bg-black100 flex relative'>
      <nav className='w-18 flex items-center flex-col justify-between pt-[10px] pb-5'>
        <div>
          <div>
            <Image src={logo} alt='Logo' width={53} height={53} />
          </div>
          <div className='flex flex-col items-center gap-2 mt-1'>
            <IconBox icon={<BsHouse />} tittle={"Home"} />
            <IconBox icon={<FiLayout />} tittle={"Layout"} />
            <IconBox icon={<GoFileCode />} tittle={"Code"} />
            <IconBox icon={<IoMoveOutline />} tittle={"Move"} />
          </div>
        </div>

        <div>
          <IconBox icon={<VscDebugDisconnect />} tittle={"Logout"} />
        </div>
      </nav>

      <div className='bg-offWhite w-full h-[calc(100%-10px)] rounded-tl-[35px] mt-[10px]'>
        {children}
      </div>
    </div>
  );
}
