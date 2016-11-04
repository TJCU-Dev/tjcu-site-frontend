import React from 'react';

import {grey200, grey400, grey800, grey900, grey600, red900} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';


export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div style={{marginBottom:10}}>
        <AppBar style={{background: grey800}} iconElementLeft={<div></div>}>
        <FlatButton style={{marginTop:10}} href='/Course'  labelStyle={{color: grey200,fontSize:20}} label="课程" />
        <FlatButton style={{marginTop:10}} href='/Account'  labelStyle={{color: grey200,fontSize:20}} label="用户" />
        <FlatButton style={{marginTop:10}} href='/login'  labelStyle={{color: grey200,fontSize:20}} label="登录" />
        <FlatButton style={{marginTop:10}} href='/join'  labelStyle={{color: grey200,fontSize:20}} label="注册" />

        </AppBar>
      </div>
    )
  }

}
