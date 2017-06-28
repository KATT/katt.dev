import React from 'react';
import Head from 'next/head';

import { initGA, logPageView } from '../utils/analytics';

export default class Layout extends React.Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }
  render() {
    return (
      <div>
        <Head>
          <title>KATTCORP LTD.</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        {this.props.children}
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
        <style jsx>{`
          div {
            text-align: center;
          }
        `}</style>
      </div>
    );
  }
}
