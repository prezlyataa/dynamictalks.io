import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RegistrationButton } from '../RegistrationButton';
import { Anchor } from 'src/components/Anchor';
import cx from 'classnames';
import pointer from 'src/images/header/pointer.svg';
import calendar from 'src/images/header/calendar.svg';
import snake from 'src/images/header/snake.svg';
import './Header.scss';


export const CN = 'header';
const NAV = 'navbar';


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
    
  }
  
  renderIcon(path, altText, content) {
    let img = ( <img
      alt={altText}
      src={path}/>);
    return content ? <span> {img} {content}</span> : img;
  }
  
  renderNavLinks() {
    const {config: {headerNavigationLinks}} = this.props;
    return headerNavigationLinks.map((link, i) => {
      return <Anchor
        className={cx(`${NAV}__link`)}
        id={link}
        key={i}
      >
        {link}
      </Anchor>;
    });
  }
  
  renderEventInfo() {
    const {config: {eventInformation: einfo}} = this.props;
    // const time = Date.parse(einfo.eventDate.time);
    return (
      <div className="event-info">
        <div className="event-info__top">
          {this.renderIcon(calendar, 'calendar', '10.03.2018')}
          {this.renderIcon(pointer, 'pointer', einfo.eventDate.place)}
        </div>
        <h1 className="event-info__title">{einfo.title}</h1>
        <h2 className="event-info__slogan">{einfo.slogan}</h2>
      </div>
    );
  }
  
  
  render() {
    const {className, config} = this.props;
    
    return (
      <div>
        <section className={cx(CN, className)}>
          <div className={cx(`${NAV}__wrapper`)}>
            <div className="container">
              <div className={cx(NAV)}>
                <Anchor id={'logo'}>
                  <img
                    src="../../images/dt-logo.svg"/>
                </Anchor>
                <nav className={cx(`${NAV}__menu`)}>
                  {this.renderNavLinks()}
                </nav>
                <RegistrationButton config={config}/>
              </div>
            </div>
          </div>
          <div className={cx(`${CN}__event-info`)}>
            {this.renderEventInfo()}
          </div>
          <div className="snake">
            {this.renderIcon(snake, 'snake-picture')}
          </div>
        </section>
      
      </div>
    );
  }
}
