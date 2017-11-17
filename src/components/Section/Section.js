import React, {Component} from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import cx from 'classnames';
import { SectionHeader } from 'src/components/Section/SectionHeader';
import { SECTION_THEME, SHAPE } from './constants';
import './Section.scss';


export const CN = 'section';



export default class Section extends Component {

  static propTypes = {

    /**
     * children - content of the link
     */
    children: PropTypes.any,

    /**
     * className - classes which can be passed from parent
     */
    className: PropTypes.string,

    /**
     * id - id of the section
     */
    id: PropTypes.string,

    /**
     * shape - shape to show below the title
     */
    shape: PropTypes.oneOf([SHAPE.TRIANGLE, SHAPE.CIRCLE, SHAPE.SQUARE]),

    /**
     * showDateAndLocation - determines is date and location line is visible
     */
    showDateAndLocation: PropTypes.bool,

    /**
     * theme - style of the rendering
     */
    theme: PropTypes.oneOf([SECTION_THEME.WHITE, SECTION_THEME.YELLOW]),

    /**
     * title to be shown
     */
    title: PropTypes.string
  };

  static defaultProps = {
    theme: SECTION_THEME.YELLOW
  };

  constructor(props) {
    super(props);

    autoBind(this);
  }


  render() {
    const {
      className,
      children,
      id,
      shape,
      showDateAndLocation,
      title,
      theme
    } = this.props;

    return (
      <section
        className={cx(CN, className, `${CN}--${theme}`)}
        id={id}
      >
        <div className={`${CN}__inner`}>
          <SectionHeader
            className={className}
            id={id}
            shape={shape}
            showDateAndLocation={showDateAndLocation}
            theme={theme}
            title={title}
          />

          {children}
        </div>
      </section>
    );
  }
}
