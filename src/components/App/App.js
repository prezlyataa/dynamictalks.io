import React, { Component } from 'react';
import { config } from 'src/config/config';
import { Top } from '../Top';
import { Meetup } from '../Meetup';
import { Speakers } from '../Speakers';
import { Organizers } from '../Organizers';
import { Footer } from '../Footer';
import { Nav } from '../Nav';
/*import { Promo } from 'src/components/Promo';*/
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
        <Top
          config={config}
          id={SECTIONS.TOP}
        />

        {/*<Promo/>*/}

        <Meetup
          config={config}
          id={SECTIONS.MEETUP}
        />
        <Speakers
          config={config}
          id={SECTIONS.SPEAKERS}
        />
        <Organizers
          config={config}
          id={SECTIONS.ORGANIZERS}
        />
        <Footer
          config={config}
        />

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
