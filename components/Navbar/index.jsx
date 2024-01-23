import { usePathname } from "next/navigation";
import Image from "next/image";
import CodeLogo from "@/public/svg/logo.svg";
import Link from "next/link";
import { Button } from "@/components/Button";
import { BiLogInCircle } from "react-icons/bi";
import { PiBooks } from "react-icons/pi";
import { ImInfo } from "react-icons/im";
import { useEffect, useState } from "react";
import useWindow from "@/hooks/useWindow";

import { Slant as Hamburger } from 'hamburger-react'
import { useModal } from "@/hooks/useModal";
import { FiUsers } from "react-icons/fi";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi"
import { useTheme } from "next-themes";

// TODO: Par rapport au page qu'on souhaite dans un config on puisse avoir la navbar tout le temps sur la page
function Navbar() {
  const { infos } = useModal();
  const windowObj = useWindow();
  const { theme, setTheme } = useTheme();

  const [darkMode, setDarkMode] = useState(false);
  const [toogleHamburger, setToogleHamburger] = useState(false);
  const [screenWidth, setScreenWidth] = useState(windowObj?.innerWidth);


  const pathname = usePathname();
  const act = (path) => pathname === path;

  useEffect(() => {
    const onResize = () => {
      setScreenWidth(window.innerWidth);

      if (screenWidth > 1200) {
        setToogleHamburger(false);
      }
    };

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, [screenWidth, toogleHamburger]);

  return (
    <nav className={toogleHamburger ? "Navbar toogle" : "Navbar"}>
      <Link href="/" draggable={false}>
        <Image
          src={CodeLogo}
          alt="Logo codeandchill"
          draggable={false}
          className="logo"
        />
      </Link>

      <div className="right">
        <div className="links">
          <Link href="/tutoriels" draggable={false} className={act("/tutoriels") ? "navLink active" : "navLink"}>
            <PiBooks className="icon books" /> Tutoriels
          </Link>

          <Link href="/partners" draggable={false} className={act("/partners") ? "navLink active" : "navLink"}>
            <FiUsers className="icon" /> Partenaires
          </Link>

          <Link href="/about" draggable={false} className={act("/about") ? "navLink active" : "navLink"}>
            <ImInfo className="icon" /> A Propos
          </Link>
        </div>

        <div className="btn-ctn">
          <Button onClick={() => infos(true, "signup")} title="S'inscrire" rounded icon={<BiLogInCircle />}>Inscription</Button>
          <Button 
            onClick={() => {setTheme(theme === "light" ? "dark" : "light")}} 
            bgColor="transparent" 
            borderColor="transparent" 
            title="Switch mode"
            icon={theme === "dark" ? <HiOutlineSun className="modeIcon"/> : <HiOutlineMoon className="modeIcon"/>}/>
        </div>

      </div>

      <Hamburger duration={0.5} toggled={toogleHamburger} toggle={setToogleHamburger}/>
    </nav>
  )
}

export default Navbar;