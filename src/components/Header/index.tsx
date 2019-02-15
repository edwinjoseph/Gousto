import * as React from 'react';
import logo from '../../img/logo.svg';
import './styles.css';

export default function (): JSX.Element {
  return (
    <header className="header">
      <img src={logo} className="logo" alt="logo" />
      <h1 className="title">Welcome to React</h1>
    </header>
  );
}
