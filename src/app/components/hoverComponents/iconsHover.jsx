export default function IconsHover({ Icon }) {
  return (
    <div className="text-grayIcon hover:text-black80 cursor-pointer transition-all duration-300 ease-in-out">
      {Icon}
    </div>
  );
}
