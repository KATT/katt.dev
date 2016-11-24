import React, { PropTypes } from 'react';
import styled from 'styled-components';
import styleSheet from 'styled-components/lib/models/StyleSheet';

import Head from 'next/head';

const globalCSS = `
  html, body {
    height: 100%;
  }
  body {
    background: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;


const KATTCORP_LOGO = `\
             / )
 / )__/ )___/ /
( @ . @ )     )
 (           )
 //"//""//"//

 KATTCORP LTD.`;

const index = props => (
  <Wrapper>
    <Head>
      <title>KATTCORP LTD.</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {props.isServer && (
        <style>
          {globalCSS}
          {styleSheet.rules().map(rule => rule.cssText).join('\n')}
        </style>
      )}
    </Head>
    <PRE>{KATTCORP_LOGO}</PRE>
    <UL>
      <LI><a href="https://github.com/KATTCORP">github</a></LI>
      <LI><a href="https://twitter.com/alexheartjs">twitter</a></LI>
      <LI><a href="https://www.linkedin.com/in/johanssonalexander">linkedin</a></LI>
      <LI><a href="mailto: alexander@n1s.se">email</a></LI>
    </UL>
  </Wrapper>
);

index.propTypes = {
  isServer: PropTypes.bool.isRequired,
};

index.getInitialProps = ({ req }) => ({
  isServer: !!req,
});


const Wrapper = styled.div`
  text-align: center;
`;
const PRE = styled.pre`
  text-align: left;
  display: inline-block;
`;
const UL = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;
const LI = styled.li`
  flex: 1;
  margin: 0;
  padding: 0 5px;
`;

export default index;
