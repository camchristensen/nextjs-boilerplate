import Link from "next/link";
import LogoDelay from "./logo/logo";
import HeaderMenu from "./HeaderMenu";
import Breakpoints from "./Breakpoints";
import JacksLogo from "./logo/JacksLogo";
import { BulbOutlineIcon, BulbFilledIcon, SunIcon } from "@sanity/icons";
export default function Header() {
  return (
    <div className=" sticky top-0 z-50 my-5 ">
      <header className="header  container flex items-center justify-around gap-2 py-5 text-center text-sm uppercase sm:px-6">
        <Link href="https://camthemovie.com/">Cam: The Movie</Link>
        <div className="flex flex-row gap-4">
          <Link
            className="header__title leading-0 group  flex flex-col items-center gap-0 leading-[1]"
            href="/"
          >
            <span className="text-[50px] font-bold">CAM</span>
            <span className="text-[16px] tracking-[1.5px] opacity-40">
              COPYWRITER
            </span>
          </Link>
        </div>
        <Link href="/about" className="lg:w-[140px] ">
          About Me
        </Link>
      </header>
    </div>
  );
}
