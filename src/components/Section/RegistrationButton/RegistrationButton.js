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
     * config - configuration object
     */
    config: PropTypes.object.isRequired,

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
    const {
      className,
      id,
      theme,
      config
    } = this.props;

    return (
      <Button
        className={cx(CN, className)}
        href={config.externalEndpoints.registrationUrl}
        id={`${id}-register`}
        target="_blank"
        theme={theme}
      >
        Реєстрація
      </Button>
    );
  }
}
