import React from 'react';
import { Router, Route, Link, browserHistory, hashHistory, IndexLink, IndexRoute } from 'react-router'

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

        <Link to="/Course">
        <FlatButton style={{marginTop:10}} labelStyle={{color: grey200,fontSize:20}} label="课程" />
        </Link>

        <Link to="/Account">
        <FlatButton style={{marginTop:10}} labelStyle={{color: grey200,fontSize:20}} label="用户" />
        </Link>

        <Link to="/login">
        <FlatButton style={{marginTop:10}} labelStyle={{color: grey200,fontSize:20}} label="登录" />
        </Link>

        <Link to="/join">
        <FlatButton style={{marginTop:10}} labelStyle={{color: grey200,fontSize:20}} label="注册" />
        </Link>

        </AppBar>
      </div>
    )
  }

}
