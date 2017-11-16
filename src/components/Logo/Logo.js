import React, {Component} from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import { LogoBW } from 'src/components/Logo/LogoBW';
import { LogoColored } from 'src/components/Logo/LogoColored';


export const LOGO_THEME = {
  BW: 'black-and-white',
  COLORED: 'colored'
};


export default class Logo extends Component {

  static propTypes = {

    /**
     * className - classes which can be passed from parent
     */
    className: PropTypes.string,

    /**
     * theme - theme of the rendering
     */
    theme: PropTypes.oneOf([LOGO_THEME.BW, LOGO_THEME.COLORED])
  };

  static defaultProps = {
    theme: LOGO_THEME.COLORED
  };

  constructor(props) {
    super(props);

    autoBind(this);
  }


  render() {
    const {className, theme} = this.props;

    switch (theme) {
      case LOGO_THEME.BW:
        return <LogoBW className={className}/>;
      case LOGO_THEME.COLORED:
        return <LogoColored className={className}/>;
      default:
        return null;
    }
  }
}
