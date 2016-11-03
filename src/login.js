import React from 'react';
import Paper from 'material-ui/Paper';
import {grey200, grey50, green700} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


const Login = () => (
  <Paper style={{ marginTop:'10%',marginLeft:'30%',width:'40%',height:350, background: grey50, padding:20}}>
  <TextField  hintText="登录名"   floatingLabelText="用户名-邮箱-学号-手机号"   style={{width: '100%'}} /><br />
  <TextField  hintText="密码"     floatingLabelText="密码"  type="password"  style={{width: '100%'}} />
  <RaisedButton label="登录" primary={true} fullWidth={true} style={{marginTop:'10%', height:50}}/>
  <RaisedButton label="注册" secondary={true} fullWidth={true} style={{marginTop:'3%', height:50}}/>
  </Paper>
);

export default Login;
