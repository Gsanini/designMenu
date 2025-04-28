import { Tooltip } from "antd";
import React from "react";

export default function IconBox({ icon, tittle }) {
  const clonedIcon = React.cloneElement(icon, {
    size: 21,
  });

  return (
    <Tooltip title={tittle} placement='right' color='#202531'>
      <div className='w-10 h-10 flex items-center justify-center text-gray-500 hover:bg-[#5a58583d] hover:text-offWhite rounded-[10px] transition-all duration-250 ease-in-out cursor-pointer'>
        {clonedIcon}
      </div>
    </Tooltip>
  );
}
