import React from 'react';
import {grey200, grey50, green700, grey900, grey600} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';

import './user.css';
import UserNav from './nav.js'

const User = () => (
  <div>
  <Paper style={{ marginLeft:'10%',width:'80%',height:"auto", background: grey50, padding:20,}}>
    <div style={{ display: 'flex', marginBottom: 10}} >
      <Avatar src="" size={100}  style={{}} />
      <div style={{marginLeft:20}}>
        <h1 className='UserName' style={{color: grey900, fontWeight:400}}>Name1</h1>
        <h4 className='UserIntroduce' style={{color: grey600, fontWeight:100 }}>简介</h4>
      </div>
    </div>
    <UserNav style={{marginTop:100}} />
  </Paper>


  </div>
);

export default User;
