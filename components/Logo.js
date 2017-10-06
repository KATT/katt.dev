// @flow

const KATTCORP_LOGO = `
<!--googleoff: index-->
             / )
 / )__/ )___/ /
( @ . @ )     )
 (           )
 //"//""//"//
<!--googleon: index-->
 KATTCORP LTD.`;

export default () => (
  <div>
    <pre dangerouslySetInnerHTML={{ __html: KATTCORP_LOGO }} />
    <style>{`
      pre {
        text-align: left;
        display: inline-block;
      }
      `}</style>
  </div>
);
