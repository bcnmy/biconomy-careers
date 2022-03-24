import Image from 'next/image';

import biconomyLogo from '../assets/images/biconomy-logo.svg';
import twitterLogo from '../assets/images/twitter-logo.svg';
import telegramLogo from '../assets/images/telegram-logo.svg';
import discordLogo from '../assets/images/discord-logo.svg';

function Footer() {
  return (
    <footer className="h-[18.75rem] w-full bg-bico-gray-300">
      <div className="container relative mx-auto flex h-full items-center justify-center">
        <div className="absolute left-0">
          <a href="https://biconomy.io">
            <Image src={biconomyLogo} alt="Biconomy" />
          </a>
        </div>

        <nav>
          <ul className="flex items-center">
            <li className="mr-14 text-2xl font-bold text-white">
              <a href="https://medium.com/biconomy">Blog</a>
            </li>
            <li className="mr-14 text-2xl font-bold text-white">
              <a href="https://docs.biconomy.io/comm/contact-us">Contact</a>
            </li>
            <li className="mr-14 text-2xl font-bold text-white">
              <a href="https://twitter.com/biconomy">
                <Image src={twitterLogo} alt="Twitter" />
              </a>
            </li>
            <li className="mr-14 text-2xl font-bold text-white">
              <a href="https://t.me/biconomy">
                <Image src={telegramLogo} alt="Telegram" />
              </a>
            </li>
            <li className="text-2xl font-bold text-white">
              <a href="https://discord.com/invite/HKHxgyEExQ">
                <Image src={discordLogo} alt="Discord" />
              </a>
            </li>
          </ul>
        </nav>

        <a
          href="https://biconomy.io"
          className="absolute right-0 text-2xl font-bold text-white"
        >
          © 2022 // Biconomy.io
        </a>
      </div>
    </footer>
  );
}

export default Footer;
