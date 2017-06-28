// @flow

const KATTCORP_LOGO = `\
             / )
 / )__/ )___/ /
( @ . @ )     )
 (           )
 //"//""//"//

 KATTCORP LTD.`;

export default () => (
  <pre>
    {KATTCORP_LOGO}
    <style>{`
      pre {
        text-align: left;
        display: inline-block;
      }`
    }</style>
  </pre>
);
