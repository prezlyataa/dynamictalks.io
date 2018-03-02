import React, {Component} from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import cx from 'classnames';
import './Footer.scss';


export const CN = 'footer';


export default class Footer extends Component {

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

  static defaultProps = {};

  constructor(props) {
    super(props);

    autoBind(this);
  }


  render() {
    const {className} = this.props;

    return (
      <footer className={cx(CN, className)} >
        <div className='logo'>logo</div>
        <div className='email'>email</div>
        <div className='socials'>socials</div>
      </footer>
    );
  }
}
