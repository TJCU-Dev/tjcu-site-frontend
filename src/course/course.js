import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';
import {grey200, grey400, grey800, grey900, grey600, red900} from 'material-ui/styles/colors';

import FinishCourse from './FinishCourse.js'
import Curriculum   from './curriculum.js'


const Course = () => (
  <Paper style={{width:'80%', marginLeft:'10%'}}>
  <Tabs tabItemContainerStyle={{background:grey800 }} inkBarStyle={{background:red900}} initialSelectedIndex={0}>
    <Tab label="课程表" >
      <Curriculum />
    </Tab>

    <Tab label="已完成课程"  >
      <FinishCourse />
    </Tab>
  </Tabs>
  </Paper>
);

export default Course;
