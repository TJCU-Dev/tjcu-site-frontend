import React from 'react';
import { Router, Route, Link, browserHistory, hashHistory, IndexLink, IndexRoute } from 'react-router'

import {grey200, grey50, green700,grey800} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

class Join extends React.Component {
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

    this.EmailChange = (event)=>{
      this.state.data.email =  event.target.value
    };

    this.XhChange = (event)=>{
      this.state.data.xh =  event.target.value
    };

    this.TelChange = (event)=>{
      this.state.data.tel =  event.target.value
    };

    this.PasswordChange = (event)=>{
      this.state.data.password =  event.target.value
    };

    this.join = () => {
      const data = this.state.data

      $.post('/api/user', data, (data, Status, xhr)=>{
        if(data._id){
           browserHistory.push('/Account')
        }else{
        }
      })

    }
  }


  render() {
    return (
      <Paper style={{ marginTop:'10%',marginLeft:'30%',width:'40%',height:"auto", background: grey50, padding:20}}>
      <TextField    onChange={this.UserChange}      hintText="用户名"   floatingLabelText="用户名"   style={{width: '100%'}} /><br />
      <TextField    onChange={this.EmailChange}     hintText="邮箱"     floatingLabelText="邮箱"    style={{width: '100%'}} /><br />
      <TextField    onChange={this.XhChange}        hintText="学号"     floatingLabelText="学号"    style={{width: '100%'}} /><br />
      <TextField    onChange={this.TelChange}       hintText="手机号"   floatingLabelText="手机号"   style={{width: '100%'}} /><br />
      <TextField    onChange={this.PasswordChange}  hintText="密码"     floatingLabelText="密码"    type="password"  style={{width: '100%'}} />
      <RaisedButton onClick={this.join} label="注册" primary={true}     fullWidth={true} style={{marginTop:'4%', height:50}} buttonStyle={{background: grey800}}  />
      </Paper>
    )
  }
}



export default Join;
