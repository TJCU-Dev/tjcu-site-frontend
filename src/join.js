import React from 'react';

import {grey200, grey50, green700} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

const Login = () => (
  <Paper style={{ marginTop:'10%',marginLeft:'30%',width:'40%',height:"auto", background: grey50, padding:20}}>
  <TextField  hintText="用户名"   floatingLabelText="用户名"   style={{width: '100%'}} /><br />
  <TextField  hintText="邮箱"   floatingLabelText="邮箱"   style={{width: '100%'}} /><br />
  <TextField  hintText="学号"   floatingLabelText="学号"   style={{width: '100%'}} /><br />
  <TextField  hintText="手机号"   floatingLabelText="手机号"   style={{width: '100%'}} /><br />
  <TextField  hintText="密码"     floatingLabelText="密码"  type="password"  style={{width: '100%'}} />
  <RaisedButton label="注册" primary={true} fullWidth={true} style={{marginTop:'4%', height:50}} />
  </Paper>
);

export default Login;
