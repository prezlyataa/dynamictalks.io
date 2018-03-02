import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cx  from 'classnames';
import './Partners.scss';

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
    const {config} = this.props;
    return(
      <section className={cx(CN)}>
        <div className={cx(`${CN}_general`)}>
          <p className={cx(`${CN}_general_title`)}>Генеральний</p>
          <div className={cx(`${CN}_general_content`)}>
            <div className={cx(`${CN}_general_content_logo`)}>
              <img
                alt="logo"
                src=""
              />
            </div>
            <div className={cx(`${CN}_general_content_desc`)}>
              <p className={cx(`${CN}_general_content_desc_title`)}>Grid Dynamics</p>
              <p className={cx(`${CN}_general_content_desc_text`)}>
                Grid Dynamics is the engineering IT services company known for transformative, mission-critical cloud solutions for retail, finance and technology sectors.
              </p>
              <div className={cx(`${CN}_general_content_desc_icons`)}>
                <a href={config.externalEndpoints.facebook}>
                  <img
                    alt="icon"
                    src="../../images/facebook.png"
                  />
                </a>
                <a href={config.externalEndpoints.linkedIn}>
                  <img
                    alt="icon"
                    src="../../images/linkedin-1.png"
                  />
                </a>
              </div>
              <div className={cx(`${CN}_general_content_desc_btn`)}>
                <a
                  className={cx(`${CN}_general_content_desc_btn_regbtn`)}
                  href={config.externalEndpoints.vacanciesUrl}
                >
                  Відкриті вакансії
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={cx(`${CN}_informational`)}>
          <p className={cx(`${CN}_informational_title`)}>
            Інформаційні
          </p>

          <div className={cx(`${CN}_general_content`)}>
            <div className={cx(`${CN}_general_content_logo`)}>
              <img
                alt="logo"
                src=""
              />
            </div>
            <div className={cx(`${CN}_general_content_desc`)}>
              <p className={cx(`${CN}_general_content_desc_title`)}>Sigma software</p>
              <p className={cx(`${CN}_general_content_desc_text`)}>
                Grid Dynamics is the engineering IT services company known for transformative, mission-critical cloud solutions for retail, finance and technology sectors.
              </p>
              <div className={cx(`${CN}_general_content_desc_icons`)}>
                <a href={config.externalEndpoints.facebook}>
                  <img
                    alt="icon"
                    src="../../images/facebook.png"
                  />
                </a>
                <a href={config.externalEndpoints.linkedIn}>
                  <img
                    alt="icon"
                    src="../../images/linkedin-1.png"
                  />
                </a>
              </div>
              <div className={cx(`${CN}_general_content_desc_btn`)}>
                <a
                  className={cx(`${CN}_general_content_desc_btn_regbtn`)}
                  href={config.externalEndpoints.vacanciesUrl}
                >
                  Відкриті вакансії
                </a>
              </div>
            </div>
          </div>

          <div className={cx(`${CN}_general_content`)}>
            <div className={cx(`${CN}_general_content_logo`)}>
              <img
                alt="logo"
                src=""
              />
            </div>
            <div className={cx(`${CN}_general_content_desc`)}>
              <p className={cx(`${CN}_general_content_desc_title`)}>Lviv IT cluster</p>
              <p className={cx(`${CN}_general_content_desc_text`)}>
                Grid Dynamics is the engineering IT services company known for transformative, mission-critical cloud solutions for retail, finance and technology sectors.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
