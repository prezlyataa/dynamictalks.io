import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tabs } from 'src/components/Tabs/Tabs';
import { TabPane } from 'src/components/Tabs/TabPane';

import './TabComponent.scss';

export class TabComponent extends Component {

  static propTypes = {

    /**
     * firstSelect - define selected tabs
     */
    firstSelect: PropTypes.number,

    /**
     * tabs - array of possible tabs
     */
    tabs: PropTypes.array

  };

  constructor(props) {
    super(props);
  }

  render(){
    const {firstSelect, tabs} = this.props;
    return(
      <Tabs selected={firstSelect || 0}>
        {tabs.map(tab =>
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
