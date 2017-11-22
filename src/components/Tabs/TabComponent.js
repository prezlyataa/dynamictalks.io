import React, { Component } from 'react';
import { Tabs } from 'src/components/Tabs/Tabs';
import { TabPane } from 'src/components/Tabs/TabPane';

import './TabComponent.scss';

export class TabComponent extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <Tabs selected={this.props.firstSelect || 0}>
        {this.props.tabs.map(tab =>
          <TabPane
            className="tabs__head"
            key={tab}
            label={tab.name}
          >
            {tab.content}
          </TabPane>)
        }
      </Tabs>
    );
  }
}
