import React from 'react';

import {grey200, grey400, grey800, grey900, grey600, red900} from 'material-ui/styles/colors';

import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';TextField
import TextField from 'material-ui/TextField';

class Secondary extends React.Component {



     render() {
       return (
         <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
           <h2>修改密码</h2>
           <TextField style={{ width:'80%' }} floatingLabelText="原密码" />
           <TextField style={{ width:'80%' }} floatingLabelText="新密码" />
           <TextField style={{ width:'80%' }} floatingLabelText="确认密码" />
           <FlatButton style={{ width:'80%' }}  label="修改"/>

         </div>
       )
     }
}


export default Secondary;
