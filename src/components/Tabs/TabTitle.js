import React, { Component } from 'react';
import autoBind from 'react-autobind';

export class  TabTitle extends Component {
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
