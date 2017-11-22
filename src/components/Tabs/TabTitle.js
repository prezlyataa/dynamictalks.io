import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

export class  TabTitle extends Component {

  static propTypes = {
    /**
     * children - object of tabs pane
     */
    children: PropTypes.object,

    /**
     * idx - idx of the event
     */
    idx: PropTypes.number,

    /**
     * onClick - function click on idx
     */
    onClick: PropTypes.func,

    /**
     * selected - If true then add active class
     */
    selected: PropTypes.bool
  };

  constructor(props) {
    super(props);
    autoBind(this);
  }

  onClick(event) {
    const { idx, onClick } = this.props;
    event.preventDefault();
    onClick && onClick(idx);
  }

  render(){
    const { idx, children, selected } = this.props;
    let activeClass = (selected ? 'tabs__item is-active' : 'tabs__item');

    return (
      <div
        className={activeClass}
        key={idx}
        onClick={this.onClick}
      >
        <span>
          {children.props.label}
        </span>
      </div>
    );
  }
}
