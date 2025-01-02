import { SiteConfig } from "@/types/siteConfig";
import { BsGithub, BsTwitterX, BsWechat, BsFillBrushFill, BsCircleFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiBuymeacoffee, SiJuejin } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { GrStripe } from "react-icons/gr";


const OPEN_SOURCE_URL = 'https://onelinkly.com/dashboard/'

const baseSiteConfig = {
  name: "OneLinkly",
  description:
    "Create Beautiful Fully Customizable Links, Smart Forms, Redirect Links and More...",
  url: "https://onelinkly.com/dashboard/",
  ogImage: "https://onelinkly.com/onelinkly.png",
  metadataBase: '/',
  keywords: ["Get Started Free", " page template", "awesome link in bio", "page maker"],
  authors: [
    {
      name: "OneLinkly🔗",
      url: "https://onelinkly.com/dashboard/",
      twitter: 'https://twitter.com/onelinkly',
    }
  ],
  creator: '@lin.ks',
  openSourceURL: 'https://onelinkly.com/dashboard/',
  themeColors: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  nextThemeColor: 'dark', // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/logo.png",
  },

  headerLinks: [
    { name: 'Sign in', href: "https://onelinkly.com/auth/sign-in", icon: BsFillBrushFill },
    { name: 'Sign up', href: "https://onelinkly.com/auth/sign-up", icon: BsCircleFill },
    { name: 'Mail', href: "https://mailto:team@onelinkly.com", icon: MdEmail }
  ],
  
  footerLinks: [
    { name: 'email', href: "mailto:elizhabiboullah@gmail.com", icon: MdEmail },
    { name: 'twitter', href: "https://twitter.com/onelinkly", icon: BsTwitterX },
    { name: 'github', href: "https://onelinkly.com/", icon: BsGithub },
    { name: 'Subscribe', href: "http://onelinkly.com/dashboard/upgrade", icon: GrStripe },
    { name: 'linkedin', href: "https://www.linkedin.com/in/elizhabiboullah/", icon: FaLinkedin }
  ],
  footerProducts: [
  ]
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    images: [`${baseSiteConfig.url}/og.png`],
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    site: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
}
