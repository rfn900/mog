import { useEffect, useState } from "react";
import AnimatedMenuIcon from "./AnimatedMenuIcon";
import { AppButton } from "./AppButton";
import MobileNav from "./MobileNav";
import Link from "next/link";
import { useRouter } from "next/router";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 80 ? setScrolled(true) : setScrolled(false);
    });
    return () =>
      window.removeEventListener("scroll", () => {
        window.scrollY > 80 ? setScrolled(true) : setScrolled(false);
      });
  });

  return (
    <div
      className={`fixed top-0 z-20 flex items-center transition duration-300 justify-center w-screen m-auto p-6 sm:px-12 ${
        scrolled ? "bg-white bgopacity-95" : "bg-transparent"
      }`}
    >
      <div className="flex cursor-pointer items-center justify-between w-full max-w-6xl">
        <Link href="/">
          <img src="/MOG_Logo_vr2_DIY.png" alt="logo" className="h-10" />
        </Link>
        <div className="justify-around hidden m-auto text-lg font-thin w-96 lg:flex">
          <div className="min-w-max">
            <Link href="">Case Study</Link>
          </div>
          <div className="min-w-max">
            <Link href="">About Us</Link>
          </div>
          <div className="min-w-max">
            <Link href="/dashboard">Admin</Link>
          </div>
        </div>
        <div className="hidden lg:flex">
          <AppButton
            text="Contact Us"
            btnType="btn-secondary"
            action={() => router.push("/contactus")}
          />
        </div>
        <AnimatedMenuIcon
          onClick={() => setMenuOpen(!menuOpen)}
          menuOpen={menuOpen}
          className="relative z-50 flex items-center justify-start w-8 h-8 cursor-pointer text-myblue lg:hidden"
        />
      </div>
      <div
        className={`fixed top-0 -left-0 z-40 transform transition duration-700 w-screen h-screen bg-gray-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <MobileNav menuOpen={menuOpen} />
      </div>
    </div>
  );
}

export default Nav;
