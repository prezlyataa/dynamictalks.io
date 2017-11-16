import React, {Component} from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import cx from 'classnames';
import logo from 'src/images/logo-gd1.svg';
import './LogoBW.scss';


export const CN = 'logo-bw';


export default class LogoBW extends Component {

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
        data-gtag="gd-logo-speakers"
        href="https://www.griddynamics.com"
        id="gd-logo-speakers"
        target="_blank"
      >
        <div className="logo-icon"/>
      </a>
    );
  }
}
