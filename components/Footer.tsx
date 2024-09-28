import Image from 'next/image';
import { Fragment, useState, useEffect } from 'react';

function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());
  useEffect(() => {
    // Update the year when the component mounts
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#161921]">
      <p className="text-base font-bold text-white">{`© ${year}. EpicAnimeVault.`}</p>
      <Image
        src="./logo.svg"
        alt="logo"
        width={47}
        height={44}
        sizes="100%"
        className="object-contain"
      />
      <div className="flex items-center gap-6">
        <Image
          src="./tiktok.svg"
          alt="logo"
          width={19}
          height={19}
          sizes="100%"
          className="object-contain"
        />
        <Image
          src="./instagram.svg"
          alt="logo"
          width={19}
          height={19}
          sizes="100%"
          className="object-contain"
        />
        <Image
          src="./twitter.svg"
          alt="logo"
          width={19}
          height={19}
          sizes="100%"
          className="object-contain"
        />
      </div>
    </footer>
  );
}

export default Footer;
