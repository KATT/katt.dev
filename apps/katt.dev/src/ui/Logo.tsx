import { AsciiArt } from "./AsciiArt";
import { kattLogo } from "./ascii-art.generated";

export function Logo(props: { className?: string }) {
  return <AsciiArt art={kattLogo} className={props.className} />;
}
