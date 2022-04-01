import Image from 'next/image';

import biconomyLogoLight from '../assets/images/biconomy-logo-light.svg';
import biconomyLogoDark from '../assets/images/biconomy-logo-dark.svg';
import twitterLogoLight from '../assets/images/twitter-logo-light.svg';
import telegramLogoLight from '../assets/images/telegram-logo-light.svg';
import discordLogoLight from '../assets/images/discord-logo-light.svg';
import twitterLogoDark from '../assets/images/twitter-logo-dark.svg';
import telegramLogoDark from '../assets/images/telegram-logo-dark.svg';
import discordLogoDark from '../assets/images/discord-logo-dark.svg';

function Footer() {
  return (
    <footer className="h-[9.375rem] w-full bg-bico-gray-300 lg:h-[18.75rem]">
      <div className="container mx-auto grid h-full grid-cols-3 items-center px-8 lg:px-0">
        <a
          href="https://biconomy.io"
          className="h-[50px] w-[38px] lg:h-auto lg:w-auto"
        >
          <div className="block dark:hidden">
            <Image src={biconomyLogoLight} alt="Biconomy" />
          </div>
          <div className="hidden dark:block">
            <Image src={biconomyLogoDark} alt="Biconomy" />
          </div>
        </a>

        <div className="col-span-2 grid grid-cols-1 lg:grid-cols-2">
          <nav className="mb-4 justify-self-end lg:mb-0 lg:justify-self-center">
            <ul className="flex flex-wrap items-center">
              <li className="mr-4 text-sm font-bold text-white dark:text-[#212325] lg:mr-12 lg:text-2xl">
                <a
                  href="https://medium.com/biconomy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog
                </a>
              </li>
              <li className="mr-4 text-sm font-bold text-white dark:text-[#212325] lg:mr-12 lg:text-2xl">
                <a
                  href="https://docs.biconomy.io/comm/contact-us"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact
                </a>
              </li>
              <li className="mr-4 text-sm font-bold text-white dark:text-[#212325] lg:mr-12 lg:text-2xl">
                <a
                  href="https://twitter.com/biconomy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex dark:hidden">
                    <Image src={twitterLogoLight} alt="Twitter" />
                  </div>
                  <div className="hidden dark:flex">
                    <Image src={twitterLogoDark} alt="Twitter" />
                  </div>
                </a>
              </li>
              <li className="mr-4 text-sm font-bold text-white dark:text-[#212325] lg:mr-12 lg:text-2xl">
                <a
                  href="https://t.me/biconomy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex dark:hidden">
                    <Image src={telegramLogoLight} alt="Telegram" />
                  </div>
                  <div className="hidden dark:flex">
                    <Image src={telegramLogoDark} alt="Telegram" />
                  </div>
                </a>
              </li>
              <li className="text-sm font-bold text-white dark:text-[#212325] lg:text-2xl">
                <a
                  href="https://discord.com/invite/HKHxgyEExQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex dark:hidden">
                    <Image src={discordLogoLight} alt="Discord" />
                  </div>
                  <div className="hidden dark:flex">
                    <Image src={discordLogoDark} alt="Discord" />
                  </div>
                </a>
              </li>
            </ul>
          </nav>

          <a
            href="https://biconomy.io"
            target="_blank"
            rel="noopener noreferrer"
            className="justify-self-end text-xs font-bold text-white dark:text-[#212325] lg:text-2xl"
          >
            © 2022 // Biconomy.io
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
