import React, {Component} from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import cx from 'classnames';
import { SocialLinks } from 'src/components/SocialLinks';
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
    const {className, config} = this.props;

    return (
      <footer className={cx(CN, className)} >
        <p>© 2017 Dynamic Talks</p>
        <div className="footer_links">
          <SocialLinks
            config={config}
            trackingSuffix="footer"
          />
          <a href="mailto:info@dynamictalks.io">info@dynamictalks.io</a>
        </div>
      </footer>
    );
  }
}
