const KATTCORP_LOGO = `
<!--googleoff: index-->
             / )
 / )__/ )___/ /
( @ . @ )     )
 (           )
 //"//""//"//
<!--googleon: index-->
  KATTCORP AB`;

export function Logo() {
  return (
    <div>
      <h1 className="sr-only">KATTCORP</h1>
      <pre
        dangerouslySetInnerHTML={{ __html: KATTCORP_LOGO }}
        className="text-left inline-block text-sm leading-tight"
        aria-hidden
      />
    </div>
  );
}
