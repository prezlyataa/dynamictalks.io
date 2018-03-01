import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RegistrationButton } from '../RegistrationButton';
import { Anchor } from 'src/components/Anchor';
import cx from 'classnames';
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
  
  
  render() {
    const {
      className,
      config: {eventInformation: einfo},
      config
    } = this.props;
    
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
            
            <h1>{einfo.title}</h1>
          </div>
        </section>
      
      </div>
    );
  }
}
