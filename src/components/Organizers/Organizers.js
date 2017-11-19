import React, {Component} from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import cx from 'classnames';
import { Section, SHAPE, SECTION_THEME } from 'src/components/Section';
import { Button } from 'src/components/Button';
import { ICalButton } from 'src/components/Organizers/ICalButton';
import './Organizers.scss';


export const CN = 'line-organizers';


export default class Organizers extends Component {

  static propTypes = {

    /**
     * className - classes which can be passed from parent
     */
    className: PropTypes.string,

    /**
     * config - configuration object
     */
    config: PropTypes.object.isRequired,

    /**
     * id - id of the section
     */
    id: PropTypes.string
  };

  static defaultProps = {};

  constructor(props) {
    super(props);

    autoBind(this);
  }


  render() {
    const {
      className,
      config,
      id
    } = this.props;

    return (
      <Section
        className={cx(CN, className)}
        config={config}
        id={id}
        shape={SHAPE.SQUARE}
        showDateAndLocation
        theme={SECTION_THEME.WHITE}
        title="Партнери"
      >
        <div className="organizers-content">
          <div className="info">
            <div className="description">
              <p className="description__title">Grid Dynamics</p>
              <p className="description__text">
                Grid Dynamics is the engineering IT services company known for transformative, mission-critical
                cloud solutions for retail, finance and technology sectors. We architected some of the busiest
                e-commerce services on the Internet and have never had an outage during the peak season.
                Founded in 2006 and headquartered in San Ramon, California with offices throughout the US and
                Eastern Europe, we focus on big data analytics, scalable omnichannel services, DevOps, and cloud
                enablement. Let our world-class engineers, armed with proven industry-specific blueprints, deliver
                your next breakaway project.
              </p>
            </div>
            <div className="socials">
              <span>Grid Dynamics в соцмережах</span>
              <nav className="socials-links">
                <a
                  href="https://twitter.com/griddynamics"
                  target="_blank"
                >
                  <i
                    aria-hidden="true"
                    className="fa fa-twitter"
                  /></a>
                <a
                  href="https://www.instagram.com/griddynamics_ua/"
                  target="_blank"
                >
                  <i
                    aria-hidden="true"
                    className="fa fa-instagram"
                  />
                </a>
                <a
                  href="https://www.facebook.com/GridDynamics.Ukraine/"
                  target="_blank"
                >
                  <i
                    aria-hidden="true"
                    className="fa fa-facebook"
                  />
                </a>
              </nav>
            </div>

            <Button
              href={config.externalEndpoints.vacanciesUrl}
              id="gd-job"
              target="_blank"
            >Вакансії компанії</Button>

          </div>
          <div className="location">
            <div className="place_event">
              <h2 className="location__title">Місце проведення</h2>
              <ICalButton config={config}/>
            </div>

            {/* eslint-disable */}
            <div
              className="map-container"
              dangerouslySetInnerHTML={{__html: config.eventAddress.googleMapEmbed}} />
            {/* eslint-enable */}
          </div>
        </div>
      </Section>
    );
  }
}
