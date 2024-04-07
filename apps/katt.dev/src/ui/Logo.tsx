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
  const width = lines.reduce((max, line) => Math.max(max, line.length), 0) * 10;
  return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${width} ${height}`}
        aria-hidden
        className="stroke-inherit fill-current w-40 h-40"
        
      >
        {KATTCORP_LOGO.split("\n").map((line, i) => (
          <text key={i} x="0" y={i * 14} className="font-mono text-sm">
            {line.replaceAll(" ", "\u00A0")}
          </text>
        ))}
      </svg>
  );
}
