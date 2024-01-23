import Link from "next/link";
import FooterList from "./FooterList";
import { Config_Footer } from "@/config";

function Footer() {
  return (
    <footer className="Footer">
      <div className="footer-ctn">
        <FooterList title="Code & Chill" list={Config_Footer.InternalLinks} />
        <FooterList title="Réseaux sociaux" list={Config_Footer.ExternalLinks} />
      </div>

      <div className="copyright">
        <p>Created by <Link href="https://github.com/DakoooM" target="_blank">DakoM</Link></p>
        <p>All copyright reserved © 2022-2023</p>
      </div>
    </footer>
  )
}

export default Footer;