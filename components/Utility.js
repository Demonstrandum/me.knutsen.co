import Head from 'next/head';
import {Component} from 'react';

(scope => {
  scope.Component = Component;
  scope.Title = props => (
    <Head>
      <meta property="og:image:width" content="242"/>
      <meta property="og:image:height" content="242"/>
      <meta property="og:description" content="Knutsen Family and Personal web-page"/>
      <meta property="og:title" content="Knutsen ─ knutsen.co"/>
      <meta property="og:url" content="https://knutsen.co/"/>
      <meta property="og:image" content="https://knutsen.co/static/og-image.jpg"/>
      <link rel="apple-touch-icon" sizes="120x120" href="/static/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png"/>
      <link rel="manifest" href="/static/site.webmanifest"/>
      <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#212121"/>
      <link rel="shortcut icon" href="/static/favicon.ico"/>
      <meta name="msapplication-TileColor" content="#b91d47"/>
      <meta name="msapplication-config" content="/static/browserconfig.xml"/>
      <meta name="theme-color" content="#ffffff"/>
      <title>{props.children} ─ Knutsen.co</title>
    </Head>
  );
  scope.Text = props => (
    <div className="text">
      {props.children}
    </div>
  );
})(global);
