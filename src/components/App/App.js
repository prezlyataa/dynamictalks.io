import React, { Component } from 'react';
import { Top } from '../Top';
import { Events } from '../Events';
import { Speakers } from '../Speakers';
import { Organizers } from '../Organizers';
import { Footer } from '../Footer';
import './App.scss';


export default class App extends Component {

  render() {
    return (
      <div>
        <Top/>
        <Events/>
        <Speakers/>
        <Organizers/>
        <Footer/>
      </div>
    );
  }
}
