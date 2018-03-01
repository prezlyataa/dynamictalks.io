import React, { Component } from 'react';
import { config } from 'src/config/config';
import {Header} from '../Header';

import './App.scss';

export const SECTIONS = {
  HEADER: 'header',
};

export default class App extends Component {

  render() {
    return (
      <div>
        <Header
          config={config}
          id={SECTIONS.HEADER}
        />
      </div>
    );
  }
}
