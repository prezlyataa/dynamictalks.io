import React, { Component } from 'react';
import { config } from 'src/config/config';

import { Header } from '../Header';
import { Schedule } from '../Schedule';
import { Partners } from '../Partners';

import './App.scss';


export const SECTIONS = {
  HEADER: 'header',
  MEETUP: 'meetup',
  SPEAKERS: 'speakers',
  ORGANIZERS: 'organizers'
};

export default class App extends Component {
  
  render() {
    return (
      <div>
        <Header
          config={config}
          id={SECTIONS.HEADER}
        />
        <Schedule config={config}/>
        <Partners config={config}/>
      </div>
    );
  }
}
