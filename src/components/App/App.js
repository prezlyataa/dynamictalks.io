import React, { Component } from 'react';
import { Top } from '../Top';
import { Meetup } from '../Meetup';
import { Speakers } from '../Speakers';
import { Organizers } from '../Organizers';
import { Footer } from '../Footer';
import './App.scss';


export default class App extends Component {

  render() {
    return (
      <div>
        <Top/>
        <Meetup/>
        <Speakers/>
        <Organizers/>
        <Footer/>
      </div>
    );
  }
}
