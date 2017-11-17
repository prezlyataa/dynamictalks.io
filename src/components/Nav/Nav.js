import React, {Component} from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import cx from 'classnames';
import { Anchor } from 'src/components/Anchor';
import './Nav.scss';
import {SECTIONS} from 'src/components/App/App';


export const CN = 'nav';


export default class Nav extends Component {

  static propTypes = {

    /**
     * className - classes which can be passed from parent
     */
    className: PropTypes.string,

    items: PropTypes.array
  };

  static defaultProps = {
    items: []
  };

  constructor(props) {
    super(props);

    this.state = {
      active: SECTIONS.TOP
    };

    autoBind(this);
  }

  componentDidMount() {
    const { items } = this.props;
    const itemsEl = items.map(item => ({
      el: document.getElementById(item),
      id: item
    }));

    document.addEventListener('scroll', () => {
      const activeEl = itemsEl
        .reduce((el, nextEl) => {
          if (this.isActive(nextEl.el)) {
            return nextEl;
          }

          return el;
        });

      this.setState({active: activeEl.id});
    });
  }

  isActive(element) {
    const rect = element.getBoundingClientRect();
    const html = document.documentElement;
    const viewportHeight = window.innerHeight || html.clientHeight;

    return rect.top <= (viewportHeight) * .3;
  }

  renderItems() {
    const { items } = this.props;
    const { active } = this.state;

    return items.map((item, index) => (
      <Anchor
        className={cx(item === active && 'active')}
        href={`#${item}`}
        id={`#nav__${item}`}
        key={index}
      />
    ));
  }

  render() {
    const {className} = this.props;

    return (
      <div className={cx(CN, className)}>
        {this.renderItems()}
      </div>
    );
  }
}
