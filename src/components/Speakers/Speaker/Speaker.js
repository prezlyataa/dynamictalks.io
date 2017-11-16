import React, {Component} from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import cx from 'classnames';
import { Anchor } from 'src/components/Anchor';
import './Speaker.scss';


export const CN = 'speaker';
export const IMAGE_POSITION = {
  TOP: 'top',
  BOTTOM: 'bottom'
};


export default class Speaker extends Component {

  static propTypes = {

    bullets: PropTypes.array,

    /**
     * className - classes which can be passed from parent
     */
    className: PropTypes.string,

    imagePosition: PropTypes.oneOf([IMAGE_POSITION.TOP, IMAGE_POSITION.BOTTOM]),

    imageSrc: PropTypes.string,

    /**
     * link - speaker's link in media
     */
    link: PropTypes.string,

    name: PropTypes.string,

    position: PropTypes.string,

    specialGuest: PropTypes.bool,

    topic: PropTypes.string
  };

  static defaultProps = {
    imagePosition: IMAGE_POSITION.TOP,
    specialGuest: false,
    bullets: []
  };

  constructor(props) {
    super(props);

    autoBind(this);
  }


  renderKeyPoints() {
    const { bullets } = this.props;

    const inner = bullets.map((bullet, index) => (
      <li key={index}>{bullet}</li>
    ));

    return (<ul>{inner}</ul>);
  }

  renderImage() {
    const {
      imageSrc,
      link,
      name
    } = this.props;

    return (
      <Anchor
        href={link}
        id={`speaker--${name}`}
        target="_blank"
      >
        <img
          alt={name}
          className="portrait"
          src={imageSrc}
        />
      </Anchor>
    );
  }

  render() {
    const {
      className,
      imagePosition,
      name,
      position,
      specialGuest,
      topic
    } = this.props;

    return (
      <div className={cx(CN, className, `${CN}--${imagePosition}`)}>

        { imagePosition === IMAGE_POSITION.TOP && this.renderImage() }

        <div className="text-wrapper">
          <div className="name">
            { specialGuest && <h5 className="special-guest">Special guest</h5> }
            <h3>{name}</h3>
            <h4 className="position">{position}</h4>
            <span/>
          </div>
          <p>«{topic}»</p>
          {this.renderKeyPoints()}
        </div>

        { imagePosition === IMAGE_POSITION.BOTTOM && this.renderImage() }
      </div>
    );
  }
}
