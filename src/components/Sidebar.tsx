import { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`flex ${isOpen ? 'w-64' : 'w-16'} transition-width duration-300 bg-base-200 text-white h-screen`}
    >
      <div className="flex flex-col w-full">
        <div className="flex items-center relative p-4">
          <span className={`${isOpen ? 'block' : 'hidden'} text-xl`}>Sidebar</span>
          <button
            onClick={toggleSidebar}
            className={`btn btn-primary p-0 min-h-1 h-6 w-6 absolute right-0 transition-all duration-300 ${isOpen ? 'left-60' : 'left-12'}`}
          >
            {isOpen ? '<' : '>'}
          </button>
        </div>

        <nav className="flex">
          <ul className="flex flex-col justify-center items-center w-full px-6">
            <li className={`p-2 hover:bg-primary w-full rounded-lg ${isOpen ? 'block' : 'hidden'}`}>
              Home
            </li>
            <li className={`p-2 hover:bg-primary w-full rounded-lg ${isOpen ? 'block' : 'hidden'}`}>
              Account
            </li>
            <li className={`p-2 hover:bg-primary w-full rounded-lg ${isOpen ? 'block' : 'hidden'}`}>
              Settings
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
