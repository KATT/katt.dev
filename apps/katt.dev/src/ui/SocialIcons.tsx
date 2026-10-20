import { AsciiArt } from "./AsciiArt";
import {
  blueskyIcon,
  emailIcon,
  githubIcon,
  linkedInIcon,
  twitterIcon,
} from "./ascii-art.generated";

/** Shared display size so every social glyph shares one optical height. */
const iconClassName = "h-[1.1em] w-auto";

function socialClassName(className?: string) {
  return [iconClassName, className].filter(Boolean).join(" ");
}

export function GitHubIcon(props: { className?: string }) {
  return <AsciiArt art={githubIcon} className={socialClassName(props.className)} />;
}

export function TwitterIcon(props: { className?: string }) {
  return (
    <AsciiArt art={twitterIcon} className={socialClassName(props.className)} />
  );
}

export function BlueskyIcon(props: { className?: string }) {
  return (
    <AsciiArt art={blueskyIcon} className={socialClassName(props.className)} />
  );
}

export function LinkedInIcon(props: { className?: string }) {
  return (
    <AsciiArt art={linkedInIcon} className={socialClassName(props.className)} />
  );
}

export function EmailIcon(props: { className?: string }) {
  return <AsciiArt art={emailIcon} className={socialClassName(props.className)} />;
}
