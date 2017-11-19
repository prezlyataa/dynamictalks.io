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
     * config - configuration object
     */
    config: PropTypes.object.isRequired,

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
    const {
      className,
      theme,
      config
    } = this.props;

    return (
      <div className={cx(CN, className, `${CN}--${theme}`)}>
        {
          config
            .eventAddress
            .addressLines
            .map((addressLine, i)=> (
              <h3 key={i}>{addressLine}</h3>
            ))
        }
      </div>
    );
  }
}
