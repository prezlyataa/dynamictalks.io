import React, {Component} from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import {Anchor} from 'src/components/Anchor';
import './Speaker.scss';

export const CN = 'footer';


export default class Speaker extends Component {

  static propTypes = {

    /**
     * className - classes which can be passed from parent
     */
    className: PropTypes.string,

    /**
     * config - configuration object
     */
    id: PropTypes.string,
    bullets: PropTypes.array,
    imageSrc: PropTypes.string,

    /**
     * link - speaker's link in media
     */
    link: PropTypes.string,
    name: PropTypes.string,
    position: PropTypes.string,
    topic: PropTypes.string,
    state: PropTypes.string,
    imagePosition: PropTypes.string

  };

  static defaultProps = {};

  constructor(props) {
    super(props);

    autoBind(this);
  }


  renderKeyPoints() {
    const {bullets} = this.props;

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
        className="portrait"
        href={link}
        id={`speaker--${name}`}
        target="_blank"
        key={name}
      >
        <img
          alt={name}
          src={imageSrc}
        />
      </Anchor>
    );
  }


  render() {
    const {
      imagePosition,
      name,
      position,
      topic,
      state
    } = this.props;


    return (
      <div className={imagePosition === 'LEFT' ? 'speaker_item' : 'speaker_item_reverse'}>

        <div className='image_container'>{this.renderImage()}</div>

        <div className='text-wrapper'>
          <div className='text-wrapper_state'>{state}</div>
          <div className='text-wrapper_name'>
            <h3>{name}</h3>
            <h4 className='text-wrapper_position'>{position}</h4>
            <span/>
          </div>
          <p className='text-wrapper_topic'>«{topic}»</p>
          {this.renderKeyPoints()}
        </div>

      </div>


    );
  }
}
