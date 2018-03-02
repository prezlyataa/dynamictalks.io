import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Heading } from '../Heading';
import { RegisterBlock } from '../RegisterBlock';
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

  constructor(props) {
    super(props);
    this.state = {
      limit: 4
    };
    this.onLoadMore = this.onLoadMore.bind(this);
  }

  onLoadMore() {
    this.setState({
      limit: this.state.limit + 2
    });
  }


  renderSpeakersDesktop() {
    const { config } = this.props;

    return config
      .previousSpeakers
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


  renderSpeakersMobile() {
    const { config } = this.props;
    const { limit } = this.state;

    return config
      .previousSpeakers
      .slice(0, limit)
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
    const { config } = this.props;
    return(
      <section className={cx(CN)}>
        <Heading title={config.titles.previous_speakers_section}/>
        <div className="desktop">
          <div className={cx(`${CN}_list`)}>
            {this.renderSpeakersDesktop()}
          </div>
        </div>
        <div className="mobile">
          <div className={cx(`${CN}_list`)}>
            {this.renderSpeakersMobile()}
          </div>
          <div className={cx(`${CN}_btn`)}>
            <button
              className={cx(`${CN}_btn_loadmore`)}
              onClick={this.onLoadMore}
            >
              {config.loadmoreButton.text}
            </button>
          </div>
          <RegisterBlock config={config}/>
        </div>
      </section>
    );
  }
}
