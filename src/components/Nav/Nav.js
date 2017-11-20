import React, {Component} from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import cx from 'classnames';
import { Anchor } from 'src/components/Anchor';
import { SECTIONS } from 'src/components/App';
import { throttle } from 'src/utils/_';
import { isElementVisible } from 'src/utils/isElementVisible';
import './Nav.scss';


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

    this.onScroll = throttle(this._onScroll, 200, this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.onScroll);
  }

  _onScroll() {
    const { items } = this.props;

    const itemsEl = items.map(item => ({
      el: document.getElementById(item),
      id: item
    }));

    const activeEl = itemsEl
      .reduce((el, nextEl) => {
        if (isElementVisible(nextEl.el)) {
          return nextEl;
        }

        return el;
      });

    this.setState({active: activeEl.id});
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
