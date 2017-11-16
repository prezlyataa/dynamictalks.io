import React, {Component} from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import cx from 'classnames';
import { Section, SHAPE } from 'src/components/Section';
import Podsvetov from 'src/images/speakers/podsvyetov.jpg';
import Semkiv from 'src/images/speakers/semkiv.jpg';
import Voyevidka from 'src/images/speakers/volodymyr_voyevidka.jpg';
import { Speaker, IMAGE_POSITION } from './Speaker';
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
      <Section
        className={cx(CN, className)}
        shape={SHAPE.TRIANGLE}
        showDateAndLocation
        title="СПІКЕРИ"
      >

        <div className="rhino-left"/>
        <div className="rhino-right"/>



        <div className="speaker-block">
          <Speaker
            bullets={[
              'What candidates usually missing about tech leading positions',
              'What skills you need to start the project',
              'What skills you need to successfully deliver the project'
            ]}
            imageSrc={Podsvetov}
            link="https://www.griddynamics.com"
            name="Георгій Подсвєтов"
            position="Practice director UI technologies / Grid Dynamics"
            topic="What skill set and experience required to be a Tech Lead on the project (front-end)"
          />

          <Speaker
            bullets={[
              'Industry standard approaches to modeling Earth and coordinate systems in use',
              'Applications of geospatial queries in car navigation software',
              'Pitfalls, constraints and limitations of developing global navigation software'
            ]}
            imagePosition={IMAGE_POSITION.BOTTOM}
            imageSrc={Semkiv}
            link="#"
            name="Любомир Семків"
            position="Senior software engineer / Intellias"
            specialGuest
            topic="Why navigation systems with all modern technologies still sucks sometimes in finding locations."
          />

          <Speaker
            bullets={[
              'What you should think of when you design logging approach',
              'How to construct log records',
              'How to aggregate, process and monitor logs'
            ]}
            imageSrc={Voyevidka}
            link="#"
            name="Володимир Воєвідка"
            position="UI engineer / Grid Dynamics"
            topic="What you should know about logging when developing web-applications and preparing for production rollout. With examples based on Elastic Stack."
          />
        </div>

      </Section>
    );
  }
}
