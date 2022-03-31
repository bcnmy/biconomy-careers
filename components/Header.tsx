import Image from 'next/image';

import careersLogoLight from '../assets/images/careers-logo-light.svg';
import careersLogoDark from '../assets/images/careers-logo-dark.svg';
import { useTheme } from 'next-themes';
import { useState } from 'react';

function Header() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`${
        isOpen
          ? 'fixed top-0 left-0 z-10 h-screen w-screen bg-bico-gray-400'
          : ''
      } container mx-auto px-8 pt-6 md:pt-24 lg:flex lg:items-center lg:justify-between`}
    >
      <div
        className={`${
          isOpen ? 'mb-12' : ''
        } flex w-full items-center justify-between`}
      >
        <a href="#">
          <div
            className={`-ml-1.5 h-8 w-[172px] dark:hidden lg:h-auto lg:w-[310px] ${
              isOpen ? 'hidden' : 'flex'
            }`}
          >
            <Image src={careersLogoLight} alt="Biconomy careers" />
          </div>
          <div
            className={`-ml-1.5 h-8 w-[172px] dark:flex lg:h-auto lg:w-[310px] ${
              isOpen ? 'flex' : 'hidden'
            }`}
          >
            <Image src={careersLogoDark} alt="Biconomy careers" />
          </div>
        </a>

        <button
          className="flex lg:hidden"
          onClick={() => setIsOpen(wasOpen => !wasOpen)}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-bico-gray-400 dark:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      <nav>
        <ul
          className={`dark:text-white lg:flex lg:text-bico-gray-400 ${
            isOpen ? 'flex flex-col text-white' : 'hidden'
          }`}
        >
          <li className="mb-6 cursor-pointer border-b border-b-white pb-6 text-xl font-bold hover:text-bico-orange lg:mr-12 lg:mb-0 lg:border-none lg:pb-0 lg:text-2xl">
            <a href="#culture" onClick={() => setIsOpen(false)}>
              Culture
            </a>
          </li>
          <li className="mb-6 cursor-pointer border-b border-b-white pb-6 text-xl font-bold hover:text-bico-orange lg:mr-12 lg:mb-0 lg:border-none lg:pb-0 lg:text-2xl">
            <a href="#open-roles" onClick={() => setIsOpen(false)}>
              Roles
            </a>
          </li>
          <li className="mb-6 cursor-pointer border-b border-b-white pb-6 text-xl font-bold hover:text-bico-orange lg:mr-12 lg:mb-0 lg:border-none lg:pb-0 lg:text-2xl">
            <a
              href="https://docs.biconomy.io/comm/contact-us"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </li>
          <li className="mb-6 cursor-pointer border-b border-b-white pb-6 text-xl font-bold hover:text-bico-orange lg:mr-12 lg:mb-0 lg:border-none lg:pb-0 lg:text-2xl">
            <button
              aria-label="Toggle Dark Mode"
              type="button"
              onClick={() => {
                setTheme(theme === 'dark' ? 'light' : 'dark');
                setIsOpen(false);
              }}
              className="flex h-8 w-8 items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="flex h-6 w-6 dark:hidden"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="hidden h-6 w-6 dark:flex"
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
