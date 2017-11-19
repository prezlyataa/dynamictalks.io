import React, {Component} from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import cx from 'classnames';
import { Section, SHAPE } from 'src/components/Section';
import { Speaker, IMAGE_POSITION } from './Speaker';
import './Speakers.scss';


export const CN = 'speakers';


export default class Speakers extends Component {

  static propTypes = {

    /**
     * className - classes which can be passed from parent
     */
    className: PropTypes.string,


    /**
     * config - configuration object
     */
    config: PropTypes.object.isRequired,

    /**
     * id - id of the section
     */
    id: PropTypes.string
  };

  static defaultProps = {};

  constructor(props) {
    super(props);

    autoBind(this);
  }


  renderSpeakers() {
    const { speakers } = this.props.config;

    return speakers.map((speaker, i) => (
      <Speaker
        {...speaker}
        imagePosition={i % 2 ? IMAGE_POSITION.BOTTOM : IMAGE_POSITION.TOP}
        key={i}
      />
    ));
  }


  render() {
    const {
      className,
      config,
      id
    } = this.props;

    return (
      <Section
        className={cx(CN, className)}
        config={config}
        id={id}
        shape={SHAPE.TRIANGLE}
        showDateAndLocation
        title="СПІКЕРИ"
      >

        <div className="rhino-left"/>
        <div className="rhino-right"/>



        <div className="speaker-block">
          {this.renderSpeakers()}
        </div>

      </Section>
    );
  }
}
