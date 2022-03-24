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
    <footer className="h-[18.75rem] w-full bg-bico-gray-300">
      <div className="container relative mx-auto flex h-full items-center justify-center">
        <div className="absolute left-0">
          <a href="https://biconomy.io">
            <div className="block dark:hidden">
              <Image src={biconomyLogoLight} alt="Biconomy" />
            </div>
            <div className="hidden dark:block">
              <Image src={biconomyLogoDark} alt="Biconomy" />
            </div>
          </a>
        </div>

        <nav>
          <ul className="flex items-center">
            <li className="mr-14 text-2xl font-bold text-white dark:text-black">
              <a href="https://medium.com/biconomy">Blog</a>
            </li>
            <li className="mr-14 text-2xl font-bold text-white dark:text-black">
              <a href="https://docs.biconomy.io/comm/contact-us">Contact</a>
            </li>
            <li className="mr-14 text-2xl font-bold text-white dark:text-black">
              <a href="https://twitter.com/biconomy">
                <div className="block dark:hidden">
                  <Image src={twitterLogoLight} alt="Twitter" />
                </div>
                <div className="hidden dark:block">
                  <Image src={twitterLogoDark} alt="Twitter" />
                </div>
              </a>
            </li>
            <li className="mr-14 text-2xl font-bold text-white dark:text-black">
              <a href="https://t.me/biconomy">
                <div className="block dark:hidden">
                  <Image src={telegramLogoLight} alt="Telegram" />
                </div>
                <div className="hidden dark:block">
                  <Image src={telegramLogoDark} alt="Telegram" />
                </div>
              </a>
            </li>
            <li className="text-2xl font-bold text-white dark:text-black">
              <a href="https://discord.com/invite/HKHxgyEExQ">
                <div className="block dark:hidden">
                  <Image src={discordLogoLight} alt="Discord" />
                </div>
                <div className="hidden dark:block">
                  <Image src={discordLogoDark} alt="Discord" />
                </div>
              </a>
            </li>
          </ul>
        </nav>

        <a
          href="https://biconomy.io"
          className="absolute right-0 text-2xl font-bold text-white dark:text-black"
        >
          © 2022 // Biconomy.io
        </a>
      </div>
    </footer>
  );
}

export default Footer;
