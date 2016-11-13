import React from 'react';
import Snackbar from 'material-ui/Snackbar';

import {grey200, grey400, grey800, grey900, grey600, red900} from 'material-ui/styles/colors';

import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';TextField
import TextField from 'material-ui/TextField';

class Secondary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      oldpw: '',
      newpw: '',
      newpw2: '',
      user:localStorage.name,
      MsgOpen: false,
      MsgText:'null'
    };
  }

  pwChange =(val,id)=>{
    this.state[id]=val
    if(this.checkpw()!=='ok') this.setState({MsgOpen: true,MsgText:this.checkpw()} )
    else this.setState({MsgOpen: true,MsgText:'密码相同请提交'} )
  }

  checkpw = ()=>{
    const state =  this.state
    if(state.newpw!==state.newpw2) return '两次密码不相同'
    return 'ok'
  }

  changePassword = ()=>{
    const that = this
    $.post('/api/user/change', this.state, (data, Status, xhr)=>{
        if(data.stats==='ok'){
             that.setState({MsgOpen: true,MsgText:data.msg} )
        }else{

        }
      })
  }
     render() {
       return (
         <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
           <h2>修改密码</h2>
           <TextField ref='oldpw'   onChange={(eve, val)=>this.pwChange(val, 'oldpw')}     value={this.state.oldpw}  style={{ width:'80%' }} floatingLabelText="原密码" />
           <TextField ref='newpw'   onChange={(eve, val)=>this.pwChange(val, 'newpw')}     value={this.state.newpw}  style={{ width:'80%' }} floatingLabelText="新密码" />
           <TextField ref='newpw2'  onChange={(eve, val)=>this.pwChange(val, 'newpw2')}    value={this.state.newpw2} style={{ width:'80%' }} floatingLabelText="确认密码" />
           <FlatButton onClick={this.changePassword} style={{ width:'80%' }}  label="修改"/>
           <Snackbar  open={this.state.MsgOpen} message={this.state.MsgText} />
         </div>
       )
     }
}


export default Secondary;
