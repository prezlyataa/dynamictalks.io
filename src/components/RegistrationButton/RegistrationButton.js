import React, {Component} from 'react';
import autoBind from 'react-autobind';
import cx from 'classnames';
import '../Button/Button.scss';
import {Button, BUTTON_THEME}  from 'src/components/Button';


export const CN = 'registration-button';


export default class RegistrationButton extends Component {

  static defaultProps = {
    theme: BUTTON_THEME.YELLOW
  };

  constructor(props) {
    super(props);

    autoBind(this);
  }


  render() {
    const {className, theme} = this.props;

    return (
      <Button
        className={cx(CN, className)}
        href="https://goo.gl/forms/CcWPa8ynuWIgZG5H2"
        id="register"
        target="_blank"
        theme={theme}
      >
        Реєстрація
      </Button>
    );
  }
}
