import React, {Component} from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import cx from 'classnames';
import logo from 'src/images/logo_2x.png';
import introText from 'src/images/intro_text.png';
import tabletIntroText from 'src/images/tablet_intro_text.png';
import rhino from 'src/images/rhino.png';
import pathLine from 'src/images/path_line.png';
import { Logo, LOGO_THEME } from 'src/components/Logo';
import { RegistrationButton, BUTTON_THEME } from 'src/components/RegistrationButton';
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

    autoBind(this);
  }


  render() {
    const {className} = this.props;

    return (
      <section
        className={cx(CN, className)}
        id="section-main"
      >
        <div className="container_dekstop">
          <div className="main_content">

            <Logo theme={LOGO_THEME.BW}/>

            <RegistrationButton theme={BUTTON_THEME.WHITE}/>

          </div>
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
            <img alt="path_line"
              src={pathLine}
            />
          </div>
          <div className="rhino">
            <img alt="rhino"
              src={rhino}
            />
          </div>
        </div>

        <div className="container_tablet">
          <div className="tablet_content">
            <div className="logo">
              <a
                data-gtag="gd-logo-main-tablet"
                href="#"
                id="gd-logo-main-tablet"
                target="_blank"
              >
                <img
                  alt="logo"
                  src={logo}
                />
              </a>
            </div>

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

            <div className="sub_intro_text">
              <p>Приходь, буде &infin; яскраво!</p>
            </div>

            <div className="register_btn">
              <a
                className="btn"
                data-gtag="register-main-tablet"
                href="https://goo.gl/forms/CcWPa8ynuWIgZG5H2"
                id="register-main-tablet"
                target="_blank"
              >Реєстрація</a>
            </div>

            <div className="path_line">
              <img
                alt="path_line"
                src={pathLine}
              />
            </div>
          </div>
        </div>

        <div className="section-controls">
          <a className="active"
            href="#section-main"
          />
          <a href="#section-events"/>
          <a href="#section-speakers"/>
          <a href="#section-organizers"/>
        </div>
      </section>
    );
  }
}
