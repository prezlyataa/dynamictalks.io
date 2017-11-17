import React, {Component} from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import cx from 'classnames';
import {Button, BUTTON_THEME}  from 'src/components/Button/index';


export const CN = 'registration-button';


export default class RegistrationButton extends Component {

  static propTypes = {

    /**
     * className - classes which can be passed from parent
     */
    className: PropTypes.string,

    /**
     * id - id of the section
     */
    id: PropTypes.string,
  };

  static defaultProps = {
    theme: BUTTON_THEME.YELLOW
  };

  constructor(props) {
    super(props);

    autoBind(this);
  }


  render() {
    const {className, id, theme} = this.props;

    return (
      <Button
        className={cx(CN, className)}
        href="https://goo.gl/forms/CcWPa8ynuWIgZG5H2"
        id={`${id}-register-btn`}
        target="_blank"
        theme={theme}
      >
        Реєстрація
      </Button>
    );
  }
}
