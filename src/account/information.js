import React from 'react';
import Snackbar from 'material-ui/Snackbar';

import {grey200, grey400, grey800, grey900, grey600, red900} from 'material-ui/styles/colors';

import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';TextField
import TextField from 'material-ui/TextField';

class Information extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      data: {
      },
      MsgOpen: false,
      MsgText:'null'
    };
    const that = this

    this.submit = ()=>{
        $.post('/api/user/update', this.state.data,(data, Status, xhr)=>{
             that.setState({MsgText: data.msg})
             that.MsgOpen()
          })
    }
    this.change = (event, val, id)=>{
      const data = this.state.data
      data[id] = val
      that.setState({data:data})
    }

  };

  componentWillMount(){
  const that = this
  $.get('/api/user', (data, Status, xhr)=>{
      if(data._id){
           that.setState({data: data})

      }else{

      }
    })

  }

  componentDidMount(){
        console.log('render end')
  }

  handleToggle = (event, toggle) => {
  this.setState({show: toggle});
  }

  show = (state) =>{
    return ["编辑","保存"][state ? 1:0]
  }

  MsgOpen = () => {
    this.setState({
      MsgOpen: true,
    });
  };

  MsgClose = () => {
    this.setState({
      MsgOpen: false,
    });
  };


   render() {
     return (
       <div>
         <div style={{display: 'flex', justifyContent:'flex-end'}} >
           <Toggle thumbSwitchedStyle={{background: grey600}} trackSwitchedStyle={{background: grey600}} style={{width:80}} toggled={this.state.show}   onToggle={this.handleToggle} label={this.show(this.state.show)} />
         </div>

         <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
           <TextField ref="user"  value={this.state.data.user}  onChange={(event, val)=>this.change(event, val, 'user')}    style={{ width:'80%' }} floatingLabelText="用户名"  disabled={!this.state.show} />
           <TextField ref="email" value={this.state.data.email} onChange={(event, val)=>this.change(event, val, 'email')}     style={{ width:'80%' }}   floatingLabelText="邮箱" disabled={!this.state.show}  />
           <TextField ref="sex"   value={this.state.data.sex}   onChange={(event, val)=>this.change(event, val, 'sex')}   style={{ width:'80%' }}   floatingLabelText="性别" disabled={!this.state.show}  />
           <TextField ref="xh"    value={this.state.data.xh}    onChange={(event, val)=>this.change(event, val, 'xh')}   style={{ width:'80%' }}   floatingLabelText="学号" disabled={!this.state.show}  />
           <TextField ref="tel"   value={this.state.data.tel}   onChange={(event, val)=>this.change(event, val, 'tel')}   style={{ width:'80%' }}   floatingLabelText="手机号" disabled={!this.state.show}  />
           <TextField ref="date"  value={this.state.data.date}  onChange={(event, val)=>this.change(event, val, 'date')}   style={{ width:'80%' }}   floatingLabelText="生日" disabled={!this.state.show}  />
           <FlatButton onClick={this.submit}   style={{ width:'80%' }}   disabled={this.state.show}   label="提交" />
         </div>
         <Snackbar  open={this.state.MsgOpen} message={this.state.MsgText} />
       </div>
     )
   }
}


export default Information;
