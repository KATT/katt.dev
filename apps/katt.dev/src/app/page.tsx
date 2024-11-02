import { Logo } from "@/ui/Logo";
import { LinkList } from "../ui/LinkList";
import {
  BlueskyIcon,
  GitHubIcon,
  TwitterIcon,
  LinkedInIcon,
  EmailIcon,
} from "../ui/SocialIcons";

export default function Page() {
  const socialLinks = [
    {
      href: "https://github.com/KATT",
      title: "GitHub",
      icon: <GitHubIcon />,
    },
    {
      href: "https://twitter.com/alexdotjs",
      title: "Twitter",
      icon: <TwitterIcon />,
    },
    {
      href: "https://linkedin.com/in/johanssonalexander/",
      title: "LinkedIn",
      icon: <LinkedInIcon />,
    },
    {
      href: "https://bsky.app/profile/katt.dev",
      title: "Bluesky",
      icon: <BlueskyIcon />,
    },
    {
      href: "mailto:alexander@n1s.se",
      title: "Email",
      icon: <EmailIcon />,
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center flex-1 space-y-4">
      <Logo />
      <LinkList items={socialLinks} />
    </main>
  );
}
