const KATTCORP_LOGO = `
<!--googleoff: index-->
             / )
 / )__/ )___/ /
( @ . @ )     )
 (           )
 //"//""//"//
<!--googleon: index-->
 KATTCORP LTD.`;

export function Logo() {
  return (
    <div>
      <pre
        dangerouslySetInnerHTML={{ __html: KATTCORP_LOGO }}
        className="text-left inline-block text-sm leading-tight"
      />
    </div>
  );
}
