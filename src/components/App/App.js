import React, {Component} from 'react';
import {config} from 'src/config/config';
import {SpeakersSection} from '../SpeakersSection';
import {ContactsSection} from '../ContactsSection';
import {SocialNetwork} from '../SocialNetwork';
import { Schedule } from '../Schedule';
import { Partners } from '../Partners';
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

        <SpeakersSection
          config={config}
          id={SECTIONS.SPEAKERS}
        />

        <Schedule config={config}/>

        <ContactsSection
          config={config}
        />

        <SocialNetwork
          config={config}
        />

        <Partners config={config}/>
      </div>
    );
  }
}
