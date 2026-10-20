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
      href: "https://bsky.app/profile/katt.dev",
      title: "Bluesky",
      icon: <BlueskyIcon />,
    },
    {
      href: "https://linkedin.com/in/johanssonalexander/",
      title: "LinkedIn",
      icon: <LinkedInIcon />,
    },
    {
      href: "mailto:alexander@n1s.se",
      title: "Email",
      icon: <EmailIcon />,
    },
  ];

  return (
    <main className="flex min-h-0 flex-1 flex-col items-center justify-center gap-5 px-4 py-5 sm:gap-8 sm:py-6">
      <Logo className="h-auto max-h-[min(7.5rem,32svh)] w-auto max-w-[min(8.5rem,70vw)]" />
      <LinkList items={socialLinks} />
    </main>
  );
}
