import React, {Component} from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import cx from 'classnames';
import { Anchor } from 'src/components/Anchor';
import './ICalButton.scss';


export const CN = 'ical-button';


export default class ICalButton extends Component {

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

    autoBind(this);
  }


  render() {
    const {className, config} = this.props;

    return (
      <Anchor
        className={cx(CN, className)}
        href={config.externalEndpoints.icalUrl}
        id="download-calendar-organizers"
      >
        Скачати подію для календаря
      </Anchor>
    );
  }
}
