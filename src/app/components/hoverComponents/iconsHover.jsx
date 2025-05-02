export default function IconsHover({ children }) {
  return (
    <div className='text-grayIcon hover:text-black80 cursor-pointer transition-all duration-300 ease-in-out'>
      {children}
    </div>
  );
}
