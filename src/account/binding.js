import React from 'react';

import {grey200, grey400, grey800, grey900, grey600, red900} from 'material-ui/styles/colors';

import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';TextField
import TextField from 'material-ui/TextField';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Chip from 'material-ui/Chip';
class Binding extends React.Component {


     render() {
       return (
         <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
           <Toolbar  style={{width:'100%', height:'auto', display: 'flex', marginTop:5}}>
              <TextField fullWidth={true} floatingLabelText="邮箱" style={{ Height:20}}  />
              <Chip style={{marginTop:30,height:30}} >已通过</Chip>
              <FlatButton style={{marginTop:26}}  disabled={true} label="验证"/>
           </Toolbar>
           <Toolbar  style={{width:'100%', height:'auto', display: 'flex', marginTop:5}}>
              <TextField fullWidth={true} floatingLabelText="手机" style={{ Height:20}}  />
              <Chip style={{marginTop:30,height:30}} >已通过</Chip>
              <FlatButton style={{marginTop:26}}  disabled={true} label="验证"/>
           </Toolbar>
           <Toolbar  style={{width:'100%', height:'auto', display: 'flex', marginTop:5}}>
              <TextField fullWidth={true} floatingLabelText="校园网" style={{ Height:20}}  />
              <Chip style={{marginTop:30,height:30}} >已通过</Chip>
              <FlatButton style={{marginTop:26}}  disabled={true} label="验证"/>
           </Toolbar>
         </div>
       )
     }
}


export default Binding;
