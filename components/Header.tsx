import Image from 'next/image';

import lightLogo from '../assets/images/light-logo.svg';
import darkLogo from '../assets/images/dark-logo.svg';
import lightToggleIcon from '../assets/images/light-toggle-icon.svg';
import darkToggleIcon from '../assets/images/dark-toggle-icon.svg';

function Header() {
  return (
    <header className="container mx-auto mt-24 flex items-center justify-between">
      <div className="block dark:hidden">
        <Image src={lightLogo} alt="Biconomy careers" />
      </div>
      <div className="hidden dark:block">
        <Image src={darkLogo} alt="Biconomy careers" />
      </div>

      <nav>
        <ul className="flex items-center text-2xl font-bold text-bico-gray-400 dark:text-white">
          <li className="mr-12 cursor-pointer hover:text-gray-800">Culture</li>
          <li className="mr-12 cursor-pointer hover:text-gray-800">Roles</li>
          <li className="mr-12 cursor-pointer hover:text-gray-800">Contact</li>
          <li>
            <button className="block hover:text-gray-800 dark:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            </button>
            <button className="hidden dark:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
