import React, {Component} from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import cx from 'classnames';
import { Anchor } from 'src/components/Anchor/index';
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
      <Anchor
        className={cx(CN, className)}
        href="https://www.griddynamics.com"
        id="gd-logo-speakers"
        target="_blank"
      >
        <div className="logo-icon"/>
      </Anchor>
    );
  }
}
