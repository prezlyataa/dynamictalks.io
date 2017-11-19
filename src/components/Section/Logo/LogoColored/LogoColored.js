import React, {Component} from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import cx from 'classnames';
import logo from 'src/images/logo-gd1.svg';
import './LogoColored.scss';


export const CN = 'logo';


export default class LogoColored extends Component {

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
      <a
        className={cx(CN, className)}
        data-gtag="gd-logo-details"
        href="https://www.griddynamics.com"
        id="gd-logo-details"
        target="_blank"
      >
        <img
          alt="grid dynamics logo"
          src={logo}
        />
        <span className={`${CN}__name`}>Grid Dynamics</span>
      </a>
    );
  }
}
