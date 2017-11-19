import React, {Component} from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import cx from 'classnames';
import './Promo.scss';


export const CN = 'promo';


export default class Promo extends Component {

  static propTypes = {

    /**
     * className - classes which can be passed from parent
     */
    className: PropTypes.string,
  };

  static defaultProps = {};

  constructor(props) {
    super(props);

    autoBind(this);
  }


  render() {
    const {className} = this.props;

    return (
      <div className={cx(CN, className)}>
        <iframe
          allowFullScreen
          frameBorder="0"
          src="https://www.youtube.com/embed/h-MOrEVgVig?rel=0&amp;controls=0&amp;showinfo=0&amp;start=38"
        />
      </div>
    );
  }
}
