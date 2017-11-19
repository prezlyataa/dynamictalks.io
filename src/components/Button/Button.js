import React, {Component} from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import cx from 'classnames';
import { Anchor } from 'src/components/Anchor';
import './Button.scss';


export const CN = 'button';
export const BUTTON_THEME = {
  WHITE: 'white',
  YELLOW: 'yellow'
};


export default class Button extends Component {

  static propTypes = {
    ...Anchor.propTypes,

    /**
     * theme - theme of the rendering
     */
    theme: PropTypes.oneOf([BUTTON_THEME.WHITE, BUTTON_THEME.YELLOW]),
  };

  static defaultProps = {
    theme: BUTTON_THEME.YELLOW
  };

  constructor(props) {
    super(props);

    autoBind(this);
  }

  onClick() {
    const { id, href, onClick } = this.props;

    {// Tealium tracking
      if(typeof gtag !== 'undefined') {
        gtag('event', 'button_click', { id, href });
      }
    }// === Tealium tracking

    onClick && onClick();
  }

  render() {
    const {className, theme, id, ...restProps} = this.props;

    return (
      <Anchor
        className={cx(CN, className, `${CN}--${theme}`)}
        onClick={this.onClick}
        {...restProps}
        id={`btn-${id}`}
      />
    );
  }
}
