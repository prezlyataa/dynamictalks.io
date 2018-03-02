import React, {Component} from 'react';
import {config} from 'src/config/config';
import {SpeakersSection} from '../SpeakersSection';
import {ContactsSection} from '../ContactsSection';
import {SocialNetwork} from '../SocialNetwork';

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

        <ContactsSection
          config={config}
        />

        <SocialNetwork
          config={config}
        />
      </div>
    );
  }
}
