import React, { Component } from 'react';
import { Top } from '../Top';
import { Meetup } from '../Meetup';
import { Speakers } from '../Speakers';
import { Organizers } from '../Organizers';
import { Footer } from '../Footer';
import { Nav } from '../Nav';
import './App.scss';

export const SECTIONS = {
  TOP: 'top',
  MEETUP: 'meetup',
  SPEAKERS: 'speakers',
  ORGANIZERS: 'organizers'
};

export default class App extends Component {

  render() {
    return (
      <div>
        <Top id={SECTIONS.TOP}/>
        <Meetup id={SECTIONS.MEETUP}/>
        <Speakers id={SECTIONS.SPEAKERS}/>
        <Organizers id={SECTIONS.ORGANIZERS}/>
        <Footer/>

        <Nav
          items={[
            SECTIONS.TOP,
            SECTIONS.MEETUP,
            SECTIONS.SPEAKERS,
            SECTIONS.ORGANIZERS
          ]}
        />
      </div>
    );
  }
}
