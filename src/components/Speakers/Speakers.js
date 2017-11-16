import React, {Component} from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import cx from 'classnames';

import Podsvetov from 'src/images/speakers/podsvyetov.jpg';
import Semkiv from 'src/images/speakers/semkiv.jpg';
import Voyevidka from 'src/images/speakers/volodymyr_voyevidka.jpg';

import './Speakers.scss';


export const CN = 'speakers';


export default class Speakers extends Component {

  static propTypes = {

    /**
     * className - classes which can be passed from parent
     */
    className: PropTypes.string,
  };

  static defaultProps = {};

  constructor(props) {
    super(props);

    autoBind(this);
  }


  render() {
    const {className} = this.props;

    return (

      <section className={cx(CN, className)}
        id="section-speakers"
      >

        <div className="rhino-left"/>
        <div className="rhino-right"/>

        <div className="header-block">

          <div className="column-1">
            <a data-gtag="gd-logo-speakers"
              href="https://www.griddynamics.com"
              id="gd-logo-speakers"
              target="_blank"
            ><div className="logo-icon"/></a>
            <div className="date">
              <h2>Львів</h2>
              <time>21 жовтня, 2017</time>
            </div>
          </div>


          <div className="column-2">
            <h2>Спікери</h2>
            <div className="triangle"/>
          </div>

          <div className="column-3">
            <a className="btn"
              data-gtag="register-speakers"
              href="https://goo.gl/forms/CcWPa8ynuWIgZG5H2"
              id="register-speakers"
              target="_blank"
            >Реєстрація</a>
            <div className="address">
              <h3>Communa</h3>
              <h3>м. Львів, вул. Галицька 1, 2-й поверх</h3>
              <h3>(на розі Площі Ринок)</h3>
            </div>
          </div>

        </div>

        <div className="speaker-block">

          <div className="first-speaker">
            <a href="https://www.griddynamics.com"
              target="_blank"
            >
              <img alt=""
                className="portrait"
                src={Podsvetov}
              />
            </a>
            <div className="text-wrapper">
              <div className="name">
                <h3>Георгій Подсвєтов</h3>
                <h4 className="position">Practice director UI technologies / Grid Dynamics</h4>
                <span/>
              </div>
              <p>«What skill set and experience required to be a Tech Lead on the project (front-end)»</p>
              <ul>
                <li>What candidates usually missing about tech leading positions</li>
                <li>What skills you need to start the project</li>
                <li>What skills you need to successfully deliver the project</li>
              </ul>
            </div>
          </div>
          <div className="second-speaker">
            <div className="text-wrapper">
              <div className="name">
                <h5 className="special-guest">Special guest</h5>
                <h3>Любомир Семків</h3>
                <h4 className="position">Senior software engineer / Intellias</h4>
                <span/>
              </div>
              <p>«Why navigation systems with all modern technologies still sucks sometimes in finding locations.»</p>
              <ul>
                <li>Industry standard approaches to modeling Earth and coordinate systems in use</li>
                <li>Applications of geospatial queries in car navigation software</li>
                <li>Pitfalls, constraints and limitations of developing global navigation software</li>
              </ul>
            </div>
            <img alt=""
              className="portrait"
              src={Semkiv}
            />
          </div>
          <div className="third-speaker">
            <img alt=""
              className="portrait"
              src={Voyevidka}
            />
            <div className="text-wrapper">
              <div className="name">
                <h3>Володимир Воєвідка</h3>
                <h4 className="position">UI engineer / Grid Dynamics</h4>
                <span/>
              </div>
              <p>«What you should know about logging when developing web-applications and preparing for production rollout.
            With examples based on Elastic Stack.»</p>
              <ul>
                <li>What you should think of when you design logging approach</li>
                <li>How to construct log records</li>
                <li>How to aggregate, process and monitor logs</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="section-controls">
          <a href="#section-main" />
          <a href="#section-events" />
          <a className="active"
            href="#section-speakers"
          />
          <a href="#section-organizers" />
        </div>
      </section>
    );
  }
}
