import React, {Component} from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import cx from 'classnames';
import slack from 'src/images/slack_icon.png';
import facebook from 'src/images/facebook-logo.png';
import './Footer.scss';


export const CN = 'footer';


export default class Footer extends Component {

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
      <footer className={cx(CN, className)} >
        <p>© 2017 Dynamic Talks</p>
        <div className="footer_links">
          <a className="slack_logo"
            data-gtag="join-slack-footer"
            href="https://dynamictalks.slack.com/join/shared_invite/enQtMjU0OTkwNjY0MjYzLTQxZmJkNjk2OTZjNTQ1OTc4N2ExYmQwZDZjYTBlYWUyNzA2NmJjMDc0ZGIxZWQ3OTkyNmZjMDQxN2RmNzA2ODc"
            id="join-slack-footer"
            target="_blank"
          >
            <img alt="Join us on Slack!"
              src={slack}
            />
          </a>
          <a className="facebook_logo"
            data-gtag="join-facebook-footer"
            href="https://www.facebook.com/dynamictalks/"
            id="join-facebook-footer"
            target="_blank"
          >
            <img alt="Join us on Facebook!"
              src={facebook}
            />
          </a>
          <a href="mailto:info@dynamictalks.io">info@dynamictalks.io</a>
        </div>
      </footer>
    );
  }
}
