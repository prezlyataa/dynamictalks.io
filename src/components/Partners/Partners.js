import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cx  from 'classnames';
import './Partners.scss';

const CN = 'partners';

export default class Partners extends Component {

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

  constructor(props){
    super(props);
  }
  render() {
    return(
      <section className={cx(CN)}>
        <div className={cx(`${CN}_title`)}>
          <p className={cx(`${CN}_title_block`)}>Наші партнери</p>
        </div>
      </section>
    );
  }
}
