import { HeartFilledIcon } from "@sanity/icons";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer container mt-10 flex flex-row items-center justify-center py-10 text-[12px] uppercase opacity-50 ">
      <p>
        <span>
          {" "}
          © {currentYear}{" "}
          <Link href="https://chasechristensen.com/" className="underline">
            Big Bro Productions
          </Link>
        </span>
      </p>
    </footer>
  );
}
