import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TabPane extends Component {

  static propTypes = {

    /**
     * children - object of tabs pane
     */
    children: PropTypes.object

  };

  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div>{ this.props.children }</div>
    );
  }
}
