import React, {Component} from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import cx from 'classnames';
import './EventDate.scss';


export const CN = 'event-date';
export const ED_THEME = {
  WHITE: 'white',
  YELLOW: 'yellow'
};


export default class EventDate extends Component {

  static propTypes = {

    /**
     * city - city of the event
     */
    city: PropTypes.string.isRequired,

    /**
     * className - classes which can be passed from parent
     */
    className: PropTypes.string,

    /**
     * theme - theme of the renderign
     */
    theme: PropTypes.oneOf([ED_THEME.WHITE, ED_THEME.YELLOW]),

    /**
     * time - time string of the event
     */
    timeString: PropTypes.string.isRequired,
  };

  static defaultProps = {
    theme: ED_THEME.YELLOW
  };

  constructor(props) {
    super(props);

    autoBind(this);
  }

  render() {
    const {
      className,
      theme,
      city,
      timeString
    } = this.props;

    return (
      <div className={cx(CN, className, `${CN}--${theme}`)}>
        <h3>{city}</h3>
        <time>{timeString}</time>
      </div>
    );
  }
}
