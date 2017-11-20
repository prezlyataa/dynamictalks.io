import React, { Component } from 'react';
import './Tabs.scss';

export default class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = { selected: this.props.selected };
  }

  _renderTitles() {
    function labels(child, idx) {
      let activeClass = (this.state.selected === idx ? 'is-active' : '');
      return (
        <div
          aria-controls={`panel${idx}`}
          key={idx}
          role="tab"
        >
          <a
            className={activeClass}
            href="#"
            onClick={this.onClick.bind(this, idx)}
          >
            {child.props.label}
          </a>
        </div>
      );
    }
    return (
      <div
        className="tabs__labels"
        role="tablist"
      >
        {this.props.children.map(labels.bind(this))}
      </div>
    );
  }


  onClick(index, event) {
    event.preventDefault();
    this.setState({
      selected: index
    });
  }

  render() {
    return (
      <div className="tabs">
        {this._renderTitles()}

        <div className="tabs__content">
          {this.props.children[this.state.selected]}
        </div>
      </div>);
  }
}

