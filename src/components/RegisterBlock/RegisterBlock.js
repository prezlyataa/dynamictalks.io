import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './RegisterBlock.scss';

const CN = 'register-block';

export default class RegisterBlock extends Component {
  static propTypes = {

    /**
     * className - classes which can be passed from parent
     */
    className: PropTypes.string
  };

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className={cx(CN)}>
        <div className={cx(`${CN}_content`)}>
          <h3 className={cx(`${CN}_content_title`)}>Захоплюючі речі попереду, реєструйся щоб отримати квиток на івент</h3>
          <button className={cx(`${CN}_content_regbtn`)}>Реєстрація</button>
        </div>
      </div>
    );
  }
}
