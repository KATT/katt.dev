import type { AsciiArt as AsciiArtData } from "./ascii-art.generated";

export function AsciiArt(props: { art: AsciiArtData; className?: string }) {
  const { width, height, d } = props.art;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      fill="currentColor"
      stroke="currentColor"
      aria-hidden
      preserveAspectRatio="xMidYMid meet"
      // The stroke matches the weight macOS font smoothing adds when these
      // glyphs are rendered as text, which is heavier for light-on-dark.
      className={["stroke-[0.15] dark:stroke-[0.3]", props.className]
        .filter(Boolean)
        .join(" ")}
    >
      <path d={d} />
    </svg>
  );
}
