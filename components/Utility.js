import Head from 'next/head';
import {Component} from 'react';

(scope => {
  scope.Component = Component;
  scope.Title = props => (
    <Head>
      <title>{props.children} ─ Knutsen.co</title>
    </Head>
  );
  scope.Text = props => (
    <div className="text">
      {props.children}
    </div>
  );
})(global);
