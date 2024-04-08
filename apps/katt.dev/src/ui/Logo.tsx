const KATTCORP_LOGO = `
             / )
 / )__/ )___/ /
( @ . @ )     )
 (           )
 //"//""//"//
 
  KATTCORP AB`;

export function Logo() {
  const fontSize = 12;
  const lineHeights = fontSize * 1.25;
  const lines = KATTCORP_LOGO.split("\n");
  const height = lines.length * lineHeights;
  const lineWidth = lines.reduce((max, line) => Math.max(max, line.length), 0);
  const width = lineWidth * 8.5;

  const logoWithWhite = lines.map((line) =>
    line.replaceAll(" ", " ").padEnd(lineWidth, " ")
  );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${width} ${height}`}
      aria-hidden
      className="stroke-inherit fill-current font-mono text-sm select-none"
      style={{
        width: `${width}px`,
      }}
      aria-label="an ASCII cat"
    >

      {logoWithWhite.map((line, i) => (
        <text key={i} y={i * 14} x="50%" text-anchor="middle">
          {line.replaceAll(" ", "\u00A0")}
        </text>
      ))}
    </svg>
  );
}
