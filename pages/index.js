import React, { PropTypes } from 'react';

import Head from 'next/head';


const KATTCORP_LOGO = `\
             / )
 / )__/ )___/ /
( @ . @ )     )
 (           )
 //"//""//"//

 KATTCORP LTD.`;

const index = props => (
  <div>
    <Head>
      <title>KATTCORP LTD.</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <pre>{KATTCORP_LOGO}</pre>
    <ul>
      <li><a href="https://github.com/KATTCORP">github</a></li>
      <li><a href="https://twitter.com/alexheartjs">twitter</a></li>
      <li><a href="https://www.linkedin.com/in/johanssonalexander">linkedin</a></li>
      <li><a href="mailto: alexander@n1s.se">email</a></li>
    </ul>
    <style jsx>{`
      div {
        text-align: center;
      }
      pre {
        text-align: left;
        display: inline-block;
      }
      ul {
        display: flex;
        margin: 0;
        padding: 0;
        list-style-type: none;
      }
      li {
        flex: 1;
        margin: 0;
        padding: 0 5px;
      }
    `}</style>
    <style global jsx>{`
      html, body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
      body {
        background: #f0f0f0;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}</style>
  </div>
);

index.propTypes = {
  isServer: PropTypes.bool.isRequired,
};

index.getInitialProps = ({ req }) => ({
  isServer: !!req,
});


export default index;
