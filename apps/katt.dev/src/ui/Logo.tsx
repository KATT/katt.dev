import { AsciiArt } from "./AsciiArt";
import { kattLogo } from "./ascii-art.generated";

export function Logo() {
  return <AsciiArt art={kattLogo} />;
}
