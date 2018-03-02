import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cx  from 'classnames';
import { Anchor } from '../Anchor';
import { Heading } from '../Heading';
import './Partners.scss';
import facebook from 'src/images/facebook.png';
import linkedin from 'src/images/linkedin-1.png';
import gd from 'src/images/gd-logo.png';

const CN = 'partners';

export default class Partners extends Component {

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

  constructor(props){
    super(props);
  }
  render() {
    const {config,id} = this.props;
    return(
      <section className={cx(CN)}
        id={id}
      >
        <Heading title={config.titles.partners_section}/>
        <div className={cx(`${CN}_general`)}>
          <p className={cx(`${CN}_general_title`)}>Генеральний</p>
          <div className={cx(`${CN}_general_content`)}>
            <div className={cx(`${CN}_general_content_logo`)}>
              <img
                alt="logo"
                src={gd}
              />
            </div>
            <div className={cx(`${CN}_general_content_desc`)}>
              <p className={cx(`${CN}_general_content_desc_title`)}>Grid Dynamics</p>
              <p className={cx(`${CN}_general_content_desc_text`)}>
                Grid Dynamics is the engineering IT services company known for transformative, mission-critical cloud solutions for retail, finance and technology sectors.
              </p>
              <div className={cx(`${CN}_general_content_desc_icons`)}>
                <Anchor href={config.externalEndpoints.facebook}>
                  <img
                    alt="icon"
                    src={facebook}
                  />
                </Anchor>
                <Anchor href={config.externalEndpoints.linkedIn}>
                  <img
                    alt="icon"
                    src={linkedin}
                  />
                </Anchor>
              </div>
              <div className={cx(`${CN}_general_content_desc_btn`)}>
                <Anchor
                  className={cx(`${CN}_general_content_desc_btn_regbtn`)}
                  href={config.externalEndpoints.vacanciesUrl}
                >
                  Відкриті вакансії
                </Anchor>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
