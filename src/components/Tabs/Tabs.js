import React, { Component } from 'react';
import autoBind from 'react-autobind';
import {TabTitle} from 'src/components/Tabs/TabTitle';

export class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: this.props.selected
    };

    autoBind(this);
  }

  _renderTitles() {
    return (
      <div
        className="tabs__head"
      >
        {this.props.children.map((children, index) => (
          <TabTitle
            children={children}
            idx={index}
            key={index}
            onClick={this.onClick}
            selected={this.state.selected === index}
          />
        ))}
      </div>
    );
  }

  onClick(index) {
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

