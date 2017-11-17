import React, {Component} from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import cx from 'classnames';
import introText from 'src/images/intro_text.png';
import tabletIntroText from 'src/images/tablet_intro_text.png';
import rhino from 'src/images/rhino.png';
import pathLine from 'src/images/path_line.png';
import { Section } from 'src/components/Section';
import { Clock } from 'src/components/Clock/index';
import './Top.scss';


export const CN = 'main';


export default class Events extends Component {

  static propTypes = {

    /**
     * className - classes which can be passed from parent
     */
    className: PropTypes.string,
  };

  static defaultProps = {};

  constructor(props) {
    super(props);

    this.state = {
      deadline: 'November 1, 2017, 10:00',
      timeMessage: 'Event has already started!'
    };

    autoBind(this);
  }

  render() {
    const {className} = this.props;

    return (
      <Section className={cx(CN, className)}>
        <div className="container_dekstop">

          <Clock
            deadline={this.state.deadline}
            timeMessage={this.state.timeMessage}
          />

          <div className="main_intro">
            <div className="intro_text">
              <img
                alt="img"
                src={introText}
              />
            </div>
            <div className="sub_intro_text">
              <p>Приходь, буде &infin; яскраво!</p>
            </div>
          </div>
          <div className="path_line">
            <img
              alt="path_line"
              src={pathLine}
            />
          </div>
          <div className="rhino">
            <img
              alt="rhino"
              src={rhino}
            />
          </div>
        </div>

        <div className="container_tablet">
          <div className="tablet_content">

            <div className="rhino_img">
              <img
                alt="img"
                src={rhino}
              />
            </div>

            <div className="intro_text">
              <img
                alt="img"
                src={tabletIntroText}
              />
            </div>

            <Clock
              deadline={this.state.deadline}
              timeMessage={this.state.timeMessage}
            />

            <div className="sub_intro_text">
              <p>Приходь, буде &infin; яскраво!</p>
            </div>

            <div className="path_line">
              <img
                alt="path_line"
                src={pathLine}
              />
            </div>
          </div>
        </div>
      </Section>
    );
  }
}
