import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './PreviousSpeakers.scss';

const CN = 'previous-speakers';

export default class PreviousSpeakers extends Component {
  static propTypes = {

    /**
     * className - classes which can be passed from parent
     */
    className: PropTypes.string,
    /**
     * config - configuration object
     */
    config: PropTypes.object.isRequired
  };


  renderSpeakers() {
    const { config } = this.props;

    return config
      .speakers
      .map(({name, position, imageSrc}, index) => (
        <div
          className={cx(`${CN}_list_speaker`)}
          key={index}
        >
          <img
            alt="speaker-img"
            className={cx(`${CN}_list_speaker_img`)}
            src={imageSrc}
          />
          <p className={cx(`${CN}_list_speaker_name`)}>{name}</p>
          <p className={cx(`${CN}_list_speaker_position`)}>{position}</p>
        </div>
      ));
  }

  render() {
    return(
      <section className={cx(CN)}>
        <h3>Speakers</h3>
        <div className={cx(`${CN}_list`)}>
          {this.renderSpeakers()}
        </div>
      </section>
    );
  }
}
