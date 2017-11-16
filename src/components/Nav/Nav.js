import React, {Component} from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import cx from 'classnames';
import './Nav.scss';


export const CN = 'nav';


export default class Nav extends Component {

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
      <div className={cx(CN, className)}>
        <a href="#section-main" />
        <a href="#section-events" />
        <a href="#section-speakers" />
        <a href="#section-organizers" />
      </div>
    );
  }
}
