import { type IconType } from "react-icons";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export interface Social {
  name: string;
  icon: IconType;
  href: string;
}

export const socials: Social[] = [
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/subliminartegraphic",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    href: "https://wa.me/569XXXXXXXX",
  },
  {
    name: "TikTok",
    icon: FaTiktok,
    href: "https://www.tiktok.com/@subliminartegraphic.cl",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    href: "https://www.facebook.com/Sebastianveliziglesias",
  },
];
