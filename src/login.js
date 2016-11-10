import React from 'react';
import { Router, Route, Link, browserHistory, hashHistory, IndexLink, IndexRoute } from 'react-router'

import Paper from 'material-ui/Paper';
import {grey50, grey200, grey400, grey800, grey900, grey600, red900} from 'material-ui/styles/colors';
// import {grey200, grey50, green700} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import 'whatwg-fetch';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        user: null,
        password: null
      }
    };

    this.UserChange = (event)=>{
      this.state.data.user =  event.target.value
    };

    this.PasswordChange = (event)=>{
      this.state.data.password =  event.target.value
    };

    this.login = () => {
      const data = this.state.data
      
      $.post('/api/login', data, (data, Status, xhr)=>{
        if(data._id){
           browserHistory.push('/Account')
        }else{
        }
      })

    }
  }

  render() {
    return (
      <Paper style={{ marginTop:'10%',marginLeft:'30%',width:'40%',height:350, background: grey50, padding:20}}>
      <TextField  hintText="登录名" onChange={this.UserChange}  floatingLabelText="用户名-邮箱-学号-手机号"   style={{width: '100%'}} /><br />
      <TextField  hintText="密码"  onChange={this.PasswordChange} floatingLabelText="密码"  type="password"  style={{width: '100%'}} />

      <RaisedButton label="登录" onClick={this.login} primary={true} fullWidth={true} style={{marginTop:'10%', height:50}} buttonStyle={{background: grey800}} />
      <Link to="/join">
      <RaisedButton label="注册" secondary={true} fullWidth={true} style={{marginTop:'3%', height:50}} buttonStyle={{background: grey600}}/>
      </Link>
      </Paper>
    )
  }
}


export default Login;
