import React, {Component} from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import cx from 'classnames';
import './EventPlace.scss';


export const CN = 'event-place';
export const EP_THEME = {
  WHITE: 'white',
  YELLOW: 'yellow'
};

export default class EventPlace extends Component {

  static propTypes = {

    /**
     * className - classes which can be passed from parent
     */
    className: PropTypes.string,

    /**
     * theme - theme of the renderign
     */
    theme: PropTypes.oneOf([EP_THEME.WHITE, EP_THEME.YELLOW])
  };

  static defaultProps = {
    theme: EP_THEME.YELLOW
  };

  constructor(props) {
    super(props);

    autoBind(this);
  }


  render() {
    const {className, theme} = this.props;

    return (
      <div className={cx(CN, className, `${CN}--${theme}`)}>
        <h3>Communa</h3>
        <h3>м. Львів, вул. Галицька, 1, 2-й поверх</h3>
        <h3>(на розі Площі Ринок)</h3>
      </div>
    );
  }
}
