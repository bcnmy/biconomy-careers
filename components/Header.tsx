import Image from 'next/image';

import careersLogoLight from '../assets/images/careers-logo-light.svg';
import careersLogoDark from '../assets/images/careers-logo-dark.svg';
import { useTheme } from 'next-themes';

function NavItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="mr-12 cursor-pointer text-2xl font-bold text-bico-gray-400 hover:text-bico-orange dark:text-white dark:hover:text-bico-orange">
      {children}
    </li>
  );
}

function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="container mx-auto flex items-center justify-between pt-24">
      <a href="#">
        <div className="block dark:hidden">
          <Image src={careersLogoLight} alt="Biconomy careers" />
        </div>
        <div className="hidden dark:block">
          <Image src={careersLogoDark} alt="Biconomy careers" />
        </div>
      </a>

      <nav>
        <ul className="flex items-center">
          <NavItem>
            <a href="#culture">Culture</a>
          </NavItem>
          <NavItem>
            <a href="#open-roles">Roles</a>
          </NavItem>
          <NavItem>
            <a
              href="https://docs.biconomy.io/comm/contact-us"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </NavItem>
          <li>
            <button
              aria-label="Toggle Dark Mode"
              type="button"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="block h-6 w-6 text-bico-gray-400 hover:text-bico-orange dark:hidden"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="hidden h-6 w-6 text-white hover:text-bico-orange dark:block"
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
