import React, {Component} from 'react';
import {config} from 'src/config/config';
import {SpeakersSection} from '../SpeakersSection';
import {ContactsSection} from '../ContactsSection';
import {SocialNetwork} from '../SocialNetwork';
import { Header } from '../Header';
import { Schedule } from '../Schedule';
import { Partners } from '../Partners';
import { PreviousSpeakers } from '../PreviousSpeakers';
import {Footer} from '../Footer';
import './App.scss';
import {AboutUsSection} from '../AboutUsSection';

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

        <SpeakersSection
          config={config}
          id={SECTIONS.SPEAKERS}
        />

        <Schedule
          config={config}
        />

        <ContactsSection
          config={config}
        />

        <SocialNetwork
          config={config}
        />

        <AboutUsSection
          config={config}
        />

        <Partners
          config={config}
        />

        <PreviousSpeakers
          config={config}
        />

        <Footer config={config}/>
      </div>
    );
  }
}
