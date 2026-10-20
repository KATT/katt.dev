import { AsciiArt } from "./AsciiArt";
import {
  blueskyIcon,
  emailIcon,
  githubIcon,
  linkedInIcon,
  twitterIcon,
} from "./ascii-art.generated";

export function GitHubIcon(props: { className?: string }) {
  return <AsciiArt art={githubIcon} className={props.className} />;
}

export function TwitterIcon(props: { className?: string }) {
  return <AsciiArt art={twitterIcon} className={props.className} />;
}

export function BlueskyIcon(props: { className?: string }) {
  return <AsciiArt art={blueskyIcon} className={props.className} />;
}

export function LinkedInIcon(props: { className?: string }) {
  return <AsciiArt art={linkedInIcon} className={props.className} />;
}

export function EmailIcon(props: { className?: string }) {
  return <AsciiArt art={emailIcon} className={props.className} />;
}
