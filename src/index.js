import React, {Component}  from 'react'
import ReactDOM, {render} from 'react-dom'
import { Router, Route, Link, browserHistory, hashHistory, IndexLink, IndexRoute } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import lightBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import styles, {getMuiTheme, MuiThemeProvider, colors} from 'material-ui/styles';
import './index.css'

import Tools from './tools.js'
import Login from './login.js'
import Join  from './join.js'
import User  from './user/user.js'
const App = ({ children }) => (
<MuiThemeProvider uiTheme={getMuiTheme(lightBaseTheme)} >
  <div>
      {children}
  </div>
</MuiThemeProvider>
)


render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={User}/>
        <Route path="join" component={Join}/>
        <Route path="login" component={Login}/>
        <Route path="User" component={User}/>

    </Route>
  </Router>
), document.getElementById('app'))


// render(
//   <MuiThemeProvider >
//   <Test />
//   </MuiThemeProvider>
//   , document.getElementById('top'))
