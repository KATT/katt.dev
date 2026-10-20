import { AsciiArt } from "./AsciiArt";
import {
  blueskyIcon,
  emailIcon,
  githubIcon,
  linkedInIcon,
  twitterIcon,
} from "./ascii-art.generated";

function socialClassName(heightClass: string, className?: string) {
  return [heightClass, "w-auto", className].filter(Boolean).join(" ");
}

export function GitHubIcon(props: { className?: string }) {
  return (
    <AsciiArt art={githubIcon} className={socialClassName("h-[1em]", props.className)} />
  );
}

export function TwitterIcon(props: { className?: string }) {
  return (
    <AsciiArt
      art={twitterIcon}
      className={socialClassName("h-[1em]", props.className)}
    />
  );
}

export function BlueskyIcon(props: { className?: string }) {
  return (
    <AsciiArt
      art={blueskyIcon}
      className={socialClassName("h-[1em]", props.className)}
    />
  );
}

export function LinkedInIcon(props: { className?: string }) {
  // LinkedIn is a single-line glyph (~half the ink height of the others).
  // Matching them at 1em makes [in] look huge; keep its natural proportion.
  return (
    <AsciiArt
      art={linkedInIcon}
      className={socialClassName("h-[0.55em]", props.className)}
    />
  );
}

export function EmailIcon(props: { className?: string }) {
  return (
    <AsciiArt art={emailIcon} className={socialClassName("h-[1em]", props.className)} />
  );
}
