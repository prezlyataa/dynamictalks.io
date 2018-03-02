import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { RegistrationButton } from '../RegistrationButton';
import { Anchor } from 'src/components/Anchor';
import pointerIconPath from 'src/images/header/pointer.svg';
import calendarIconPath from 'src/images/header/calendar.svg';
import snakeIconPath from 'src/images/header/snake.svg';
import menuBurgerClosePath from 'src/images/header/burger.svg';
import menuBurgerOpenPath from 'src/images/header/burger-close.svg';
import mainLogoTitlePath from 'src/images/dt-logo.svg';
import playDemoPath from 'src/images/header/play-sign.svg';
import partnerLogoPath from 'src/images/header/logo-gd1.svg';
import './Header.scss';


export const CN = 'header';
const NAV = 'navbar';
const INFO = 'event-info';


export default class Header extends Component {
  
  static propTypes = {
    
    /**
     * className - classes which can be passed from parent
     */
    className: PropTypes.string,
    
    /**
     * config - configuration object
     */
    config: PropTypes.object.isRequired,
  };
  
  static defaultProps = {};
  
  constructor(props) {
    super(props);
    
    this.state = {
      isMenuOpen: false
    };
    
    this.onMenuClick = this.onMenuClick.bind(this);
    
  }
  
  renderIcon(path, altText, content) {
    let img = ( <img
      alt={altText}
      src={path}/>);
    return content ? <span> {img} {content}</span> : img;
  }
  
  renderNavLinks() {
    const {config: {headerNavigationLinks}} = this.props;
    return headerNavigationLinks.map((item, i) => {
      return <Anchor
        className={cx(`${NAV}__link`)}
        href={item.href}
        id={item.title}
        key={i}
      >
        {item.title}
      </Anchor>;
    });
  }
  
  renderEventInfo() {
    const {config: {eventInformation: einfo}} = this.props;
    return (
      <div className={cx(INFO)}>
        <div className={cx(`${INFO}__top`)}>
          {this.renderIcon(calendarIconPath, 'calendarIconPath', '10.03.2018')}
          {this.renderIcon(pointerIconPath, 'pointerIconPath', einfo.eventDate.place)}
        </div>
        <h1 className={cx(`${INFO}__title`)}>{einfo.title}</h1>
        <h2 className={cx(`${INFO}__slogan`)}>{einfo.slogan}</h2>
      </div>
    );
  }
  
  renderPlayButton() {
    const {config: {buttonsText,externalEndpoints}} = this.props;
    return (
      <div className="play-btn">
        <Anchor
          href={externalEndpoints.promoVideo}
          id="play"
          target="_blank"
        >
          {this.renderIcon(playDemoPath, 'play-demo')}
          {buttonsText.playDemo}
        </Anchor>
      </div>
    );
  }
  
  onMenuClick() {
    this.setState((prevState) => {
      return {isMenuOpen: !prevState.isMenuOpen};
    });
  }
  
  render() {
    const {className, config} = this.props;
    const {isMenuOpen} = this.state;
    
    return (
      <section
        className={cx(CN, className)}
        id="header"
       
      >
        <div className={cx(`${NAV}__wrapper`)}>
          <div className="container">
            <div className={cx(NAV)}>
              <Anchor
                href="#header"
                id="logo"
              >
                <img
                  src={mainLogoTitlePath}/>
              </Anchor>
              <nav className={cx(`${NAV}__menu`)}>
                {this.renderNavLinks()}
              </nav>
              <RegistrationButton
                className={cx(`${NAV}__btn`)}
                config={config}
              />
              <div className={cx(`${NAV}__burger-icon`)}>
                <img
                  alt="burger-icon"
                  onClick={this.onMenuClick}
                  src={isMenuOpen ? menuBurgerOpenPath : menuBurgerClosePath}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={cx(`${CN}__event-info`)}>
          {this.renderEventInfo()}
          {this.renderPlayButton()}
        </div>
        <div className="snake">
          {this.renderIcon(snakeIconPath, 'snakeIconPath-picture')}
        </div>
        <div className={cx({'collapse-menu': isMenuOpen})}>
          {isMenuOpen &&
          <div>
            <nav>{this.renderNavLinks()}</nav>
            <RegistrationButton
              className="collapse-menu__rbtn"
              config={config}
            />
          </div>
          }
        </div>
        <div className="partner">
          <div className="partner__wrap">
            <h2>{config.eventInformation.partnerText}</h2>
            <Anchor
              href={config.externalEndpoints.site}
              id="partner"
            >
              {this.renderIcon(partnerLogoPath, 'partner-logotype')}
            </Anchor>
          </div>
        </div>
      </section>
    );
  }
}
