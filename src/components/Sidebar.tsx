import { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`flex ${isOpen ? 'min-w-64' : 'min-w-16'} transition-width duration-300 bg-base-200 text-white h-screen`}
    >
      <div className="flex flex-col w-full">
        <div className="flex items-center relative p-4">
          <span
            className={`${isOpen ? 'block' : 'hidden'} flex w-full justify-center items-center`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
            >
              <g clip-path="url(#clip0_316_207)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M37.074 15.418C37.5255 15.3437 37.987 15.489 38.3159 15.8086C42.1398 19.5268 44.2457 24.5032 44.2457 29.821C44.2457 40.6047 35.4729 49.378 24.6897 49.378C15.7698 49.378 7.9885 43.339 5.76696 34.6924C5.34599 33.0519 5.13257 31.4131 5.13257 29.821C5.13257 26.6958 5.86263 23.6915 7.30251 20.8919C8.71953 18.1396 10.8031 15.7295 13.3284 13.9215C13.343 13.911 13.358 13.9008 13.373 13.8908C13.4661 13.8294 13.5655 13.7567 13.6707 13.6796L13.6815 13.6717C13.6923 13.6639 13.703 13.6561 13.7137 13.6482C13.7557 13.6174 13.7978 13.5866 13.8402 13.5561C17.8554 10.6829 20.3771 6.22884 20.7627 1.33308C20.8007 0.849904 21.0781 0.417941 21.5018 0.182334C21.9255 -0.0531764 22.4386 -0.0609882 22.8692 0.161503C27.8152 2.71788 31.4462 7.27389 32.8309 12.6612C33.2521 14.3014 33.4655 15.9402 33.4655 17.5328C33.4655 18.3628 33.4114 19.1905 33.3039 20.0134C34.3825 18.8743 35.2993 17.5857 36.021 16.1836C36.2309 15.776 36.6216 15.492 37.074 15.418ZM23.941 35.9114C27.2465 35.9114 29.9262 33.2317 29.9262 29.9261C29.9262 26.6206 27.2465 23.9409 23.941 23.9409C20.6354 23.9409 17.9557 26.6206 17.9557 29.9261C17.9557 33.2317 20.6354 35.9114 23.941 35.9114Z"
                  fill="#6359E9"
                />
              </g>
              <defs>
                <clipPath id="clip0_316_207">
                  <rect width="49.3782" height="49.3782" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
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
