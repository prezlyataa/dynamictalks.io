import React, {Component} from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import cx from 'classnames';
import { Anchor } from 'src/components/Anchor';
import slack from 'src/images/slack_icon.png';
import facebook from 'src/images/facebook-logo.png';
import youtube from 'src/images/youtube-logo.png';
import './SocialLinks.scss';


export const CN = 'social-links';

export default class SocialLinks extends Component {

  static propTypes = {

    /**
     * className - classes which can be passed from parent
     */
    className: PropTypes.string,

    /**
     * config - configuration object
     */
    config: PropTypes.object.isRequired,

    trackingSuffix: PropTypes.string
  };

  static defaultProps = {
    trackingSuffix: ''
  };

  constructor(props) {
    super(props);

    autoBind(this);
  }


  renderRecources() {
    const { config, trackingSuffix } = this.props;
    const social = [
      {id: 'join-slack-details', link: config.externalEndpoints.slack, ico: slack },
      {id: 'join-facebook_logo', link: config.externalEndpoints.facebook, ico: facebook },
      {id: 'join-youtube-details', link: config.externalEndpoints.youtube, ico: youtube }
    ];

    return social.map((soc, index) => {
      const trackingId = `${soc.id}--${trackingSuffix}`;
      return (
        <Anchor
          className={soc.id}
          href={soc.link}
          id={trackingId}
          key={index}
          onClick={this.onClick(trackingId, soc.href)}
          target="_blank"
        >
          <img
            alt="slack-icon"
            src={soc.ico}
          />
        </Anchor>
      );
    });
  }

  onClick(id, href) {

    return () => {
      {// Tealium tracking
        if (typeof gtag !== 'undefined') {
          gtag('event', 'button_click', {id, href});
        }
      }// === Tealium tracking
    };
  }


  render() {
    const {className} = this.props;

    return (
      <div className={cx(CN, className)}>
        {this.renderRecources()}
      </div>
    );
  }
}
