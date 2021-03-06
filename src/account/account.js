import React from 'react';
import {grey200, grey50, green700, grey900, grey600} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';

import './Account.css';
import UserNav from './nav.js'

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      portrait: (localStorage.portrait=='') ? '/img/portrait/default.jpg' : localStorage.portrait,
      name: localStorage.name
    };

  }

  render() {
    return (
  <div>
  <Paper style={{ marginLeft:'10%',width:'80%',height:"auto", background: grey50, padding:20,}}>
    <div style={{ display: 'flex', marginBottom: 10}} >
      <Avatar src={this.state.portrait} size={100}  style={{}} />
      <div style={{marginLeft:20}}>
        <h1 className='UserName' style={{color: grey900, fontWeight:400}}>{this.state.name}</h1>
        <h4 className='UserIntroduce' style={{color: grey600, fontWeight:100 }}>简介</h4>
      </div>
    </div>
    <UserNav style={{marginTop:100}} />
  </Paper>

  </div>
)
}

}

export default Account;
