import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

import {grey200, grey400, grey800, grey900, grey600, red900} from 'material-ui/styles/colors';

import Information from './information.js'
import Security    from './security.js'
import Binding     from './binding.js'

function handleActive(tab) {
  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

const UserNav = () => (
  <Tabs tabItemContainerStyle={{background:grey800 }} inkBarStyle={{background:red900}} initialSelectedIndex={1}>
    <Tab label="信息资料" >
       <Information />
    </Tab>
    <Tab label="绑定" >
       <Binding />
    </Tab>
    <Tab label="安全"  >
       <Security />
    </Tab>
  </Tabs>
);

export default UserNav;
