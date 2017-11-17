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
     * className - classes which can be passed from parent
     */
    className: PropTypes.string,

    /**
     * theme - theme of the renderign
     */
    theme: PropTypes.oneOf([ED_THEME.WHITE, ED_THEME.YELLOW])
  };

  static defaultProps = {
    theme: ED_THEME.YELLOW
  };

  constructor(props) {
    super(props);

    autoBind(this);
  }


  render() {
    const {className, theme} = this.props;

    return (
      <div className={cx(CN, className, `${CN}--${theme}`)}>
        <h3>Львів</h3>
        <time>21 жовтня, 2017</time>
      </div>
    );
  }
}
