import { MdOutlineNightsStay } from "react-icons/md";
import IconsHover from "../hoverComponents/iconsHover";

export default function UserMenu({ children }) {
  return (
    <div>
      <div className='text-dark-green flex justify-between gap-5'>
        <div>
          <div className='flex items-center'>
            <p className='text-[13px]'>Pages</p>
            <span className='ml-1 mr-1 text-[13px]'>/</span>
            <p className='text-[13px]'>Dashboards</p>
          </div>
          <div>
            <h1 className='text-[27px] font-[600]'>Main Dashboard</h1>
          </div>
        </div>
        <div className='w-80 h-[55px] bg-white90  rounded-[25px] shadow-[0px_8px_22px_0px_rgba(0,_46,_31,_0.1)]'>
          <div className='flex items-center justify-end w-full h-full px-3 py-1 gap-3'>
            <IconsHover children={<MdOutlineNightsStay size={18} />} />
            <div className='w-10 h-10 bg-greenWhite rounded-full flex items-center justify-center'>
              <span className='font-[500] text-frog'>GS</span>
            </div>
          </div>
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
}
