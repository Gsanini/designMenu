export default function UserMenu({ children }) {
  return (
    <div>
      <div className="text-dark-green flex justify-between gap-3">
        <div>
          <div className="flex items-center whitespace-nowrap">
            <p className="text-[13px]">Pages</p>
            <span className="ml-1 mr-1 text-[13px]">/</span>
            <p className="text-[13px]">Dashboards</p>
          </div>
          <div>
            <h1 className="text-[27px] font-[600] whitespace-nowrap">
              Main Dashboard
            </h1>
          </div>
        </div>
        <div className="w-80 h-[55px] bg-white90  rounded-[25px] shadow-[0px_0px_100px_15px_rgba(0,_0,_0,_0.1)]">
          <div className="flex items-center justify-between w-full h-full px-2 py-2">
            <div></div>
            <div className="w-10 h-10 bg-greenWhite rounded-full flex items-center justify-center">
              <span className="font-[500] text-frog">GS</span>
            </div>
          </div>
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
}
