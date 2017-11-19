import React, {Component} from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import cx from 'classnames';
import './Anchor.scss';


export const CN = 'anchor';


export default class Anchor extends Component {

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
     * href - link to redirect to
     */
    href: PropTypes.string,

    /**
     * id - string to be populated as id and data-gtag
     */
    id: PropTypes.string.isRequired,

    /**
     * target - The target attribute specifies where to open the linked document:
     */
    target: PropTypes.oneOf(['_blank', '_self', '_parent', '_top'])
  };

  static defaultProps = {
    target: '_self'
  };

  constructor(props) {
    super(props);

    autoBind(this);
  }


  render() {
    const {
      className,
      href,
      target,
      children,
      id
    } = this.props;

    return (
      <a
        className={cx(CN, className)}
        data-gtag={id}
        href={href}
        id={id}
        target={target}
      >
        {children}
      </a>
    );
  }
}
