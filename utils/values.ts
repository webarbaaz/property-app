import { Phone } from "lucide-react";
import { FaHome, FaRegNewspaper, FaShieldAlt, FaUsers } from "react-icons/fa";

export const quickLinks = [
  { title: "Home", link: "/", icon: FaHome },
  { title: "About", link: "/about-us", icon: FaUsers },
  { title: "Contact", link: "/contact-us", icon: Phone },
  { title: "Privacy Policy", link: "/privacy-policy", icon: FaShieldAlt },
  {
    title: "Terms & Condition",
    link: "/terms-and-condition",
    icon: FaRegNewspaper,
  },
];
