import { FaDiscord, FaTwitter, FaYoutube } from "react-icons/fa";
import Heading from "@/components/Heading";
import Code from "@/components/Code";

export const GlobalStatesDefault = {
  showModal: false,
  modalContent: "signup",
  comments: []
}

export const Discord_Config = {
  link: "https://discord.gg/CadqdhgRxh",
  widgetLink: "https://discord.com/widget?id=800533788421259296&theme=light"
}

export const Config_Footer = {
  InternalLinks: [
    {
      label: "Tutoriels",
      icon: <PiBooks className="itm-icon"/>,
      href: "/tutoriels"
    },
    {
      label: "Partenaires",
      icon: <FiUsers className="itm-icon"/>,
      href: "/partners"
    },
    {
      label: "A Propos",
      icon: <ImInfo className="itm-icon"/>,
      href: "/about"
    },
  ],

  ExternalLinks: [
    {
      label: "Discord", 
      icon: <FaDiscord className="itm-icon"/>,
      target: "_blank",
      href: Discord_Config.link
    },
    {
      label: "YouTube", 
      icon: <FaYoutube className="itm-icon"/>,
      target: "_blank", 
      href: "https://www.youtube.com/@DakoM/videos"
    },
    {
      label: "Twitter", 
      icon: <FaTwitter className="itm-icon"/>,
      target: "_blank", 
      href: "https://twitter.com/"
    },
  ]
}

export const Markdown_Components = {
  strong({ children }) {
    return <strong style={{ fontWeight: "bold" }}>{children}</strong>;
  },
  blockquote({ children }) {
    return <blockquote className="blockquote">{children}</blockquote>
  },
  p ({ children }) {
    return <p style={{margin: "10px 0"}}>{children}</p>
  },
  pre ({ children }) {
    return <pre style={{width: "100%"}}>{children}</pre>
  },
  code({ children, language }) {
    return <Code language={language}>{children}</Code>
  },
  hr() {
    return <hr className="separatorLine" />
  },
  h1({ children, ...props }) {
    return <Heading level={2} {...props}>{children}</Heading>
  },
  h2({ children, ...props }) {
    return <Heading level={2} {...props}>{children}</Heading>
  },
  h3({ children, ...props }) {
    return <Heading level={3} {...props}>{children}</Heading>
  },
  h4({ children, ...props }) {
    return <Heading level={4} {...props}>{children}</Heading>
  },
  h5({ children, ...props }) {
    return <Heading level={5} {...props}>{children}</Heading>
  },
  h6({ children, ...props }) {
    return <Heading level={6} {...props}>{children}</Heading>
  }
}

import html5Logo from "@/public/svg/html.svg";
import jsLogo from "@/public/svg/js.svg";
import cssLogo from "@/public/svg/css.svg";
import { PiBooks } from "react-icons/pi";
import { ImInfo } from "react-icons/im";
import { FiUsers } from "react-icons/fi";

export const Langs_Available = {
  "javascript": {
    label: "Javascript",
    name: "javascript",
    extension: ".js",
    image: jsLogo
  },
  "html": {
    label: "HTML",
    name: "html",
    extension: ".html",
    image: html5Logo
  },
  "css": {
    label: "CSS",
    name: "css",
    extension: ".css",
    image: cssLogo
  }
}