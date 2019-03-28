import Head from 'next/head';
import React from 'react';

import { initGA, logPageView } from '../utils/analytics';
import { JSONLD_KATTCORP } from '../utils/jsonld';
import JSONLD from './JSONLD';

declare global {
  // tslint:disable-next-line:interface-name
  interface Window {
    GA_INITIALIZED?: boolean;
  }
}

export default class Layout extends React.Component {
  public componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }

  public render() {
    return (
      <div>
        <Head>
          <title>KATTCORP LTD.</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="canonical" href="https://kattcorp.com/" />
        </Head>
        {this.props.children}
        <style global jsx>{`
          html,
          body {
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
        <JSONLD data={JSONLD_KATTCORP} />
      </div>
    );
  }
}
