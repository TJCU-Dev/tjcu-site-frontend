import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

import {grey200, grey400, grey800, grey900, grey600, red900} from 'material-ui/styles/colors';

import FinishCourse from './FinishCourse.js'

const Course = () => (
  <div style={{width:'80%', marginLeft:'10%'}}>
  <Tabs tabItemContainerStyle={{background:grey800 }} inkBarStyle={{background:red900}} initialSelectedIndex={1}>
    <Tab label="课程表" >

    </Tab>

    <Tab label="已完成课程"  >
      <FinishCourse />
    </Tab>
  </Tabs>
  </div>
);

export default Course;
