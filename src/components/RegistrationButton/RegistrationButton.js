import React, { Component } from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';
import './RegistrationButton.scss';


export const CN = 'registration-button';


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
  
  
  render() {
    const {className, config} = this.props;
    
    return (
      <button className={cx(CN, className)}>
        {config.registrationButton.text}
      </button>
    );
  }
}
