import React from 'react';

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
      }
    };
    var that = this
    $.get('/api/user', (data, Status, xhr)=>{
      console.log(data)
      if(data._id){
           that.setState({data: data})
           this.renderText()
      }else{

      }
    })

    this.change = (a,b,c)=>{
      console.log(a)
      console.log(b)
      console.log(c)
      console.log(that.state.data)
    }

    this.renderText = (data)=>{
      console.log(that.state.data)
      var data = data || that.state.data
      for (var key in data){
        console.log(that.refs[key])
          if(that.refs[key]) that.refs[key].value = data[key]
      }
    }

    this.change = (a,b)=>{
      console.log(a)
      console.log(b)
    }

  };


  handleToggle = (event, toggle) => {
  this.setState({show: toggle});
  };
  show = (state) =>{
    return ["编辑","保存"][state ? 1:0]
  }


   render() {
     return (
       <div>
         <div style={{display: 'flex', justifyContent:'flex-end'}} >
           <Toggle thumbSwitchedStyle={{background: grey600}} trackSwitchedStyle={{background: grey600}} style={{width:80}} toggled={this.state.show}   onToggle={this.handleToggle} label={this.show(this.state.show)} />
         </div>

         <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
           <TextField ref="user"    onChange={this.change}    style={{ width:'80%' }} floatingLabelText="用户名"  disabled={!this.state.show} />
           <TextField ref="email"   style={{ width:'80%' }}   floatingLabelText="邮箱" disabled={!this.state.show}  />
           <TextField ref="sex"     style={{ width:'80%' }}   floatingLabelText="性别" disabled={!this.state.show}  />
           <TextField ref="xh"      style={{ width:'80%' }}   floatingLabelText="学号" disabled={!this.state.show}  />
           <TextField ref="tel"     style={{ width:'80%' }}   floatingLabelText="手机号" disabled={!this.state.show}  />
           <TextField ref="date"    style={{ width:'80%' }}   floatingLabelText="生日" disabled={!this.state.show}  />
           <FlatButton              style={{ width:'80%' }}   disabled={this.state.show}   label="提交" />
         </div>
       </div>
     )
   }
}


export default Information;
