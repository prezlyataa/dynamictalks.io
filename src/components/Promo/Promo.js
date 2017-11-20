import React, {Component} from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import cx from 'classnames';
import ReactPlayer from 'react-player';
import { throttle } from 'src/utils/_';
import { isElementOnView } from 'src/utils/isElementVisible';
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

    this.state = {
      visible: false
    };

    autoBind(this);

    this.onScroll = throttle(this._onScroll, 200, this);
    this.container = null;
  }

  componentDidMount() {
    document.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.onScroll);
  }

  _onScroll() {
    this.setState({ visible: isElementOnView(this.container) });
  }

  saveRef(el) {
    this.container = el;
  }

  render() {
    const {className} = this.props;
    const {visible} = this.state;

    return (
      <div
        className={cx(CN, className)}
        ref={this.saveRef}
      >
        <ReactPlayer
          height="100%"
          playing={visible}
          url="https://www.youtube.com/watch?v=h-MOrEVgVig"
          width="100%"
        />
        {/*<iframe
          allowFullScreen
          frameBorder="0"
          src="https://www.youtube.com/embed/h-MOrEVgVig?rel=0&amp;controls=0&amp;showinfo=0&amp;start=2"
        />*/}
      </div>
    );
  }
}
