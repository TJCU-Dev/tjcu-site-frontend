import React, {Component}  from 'react'
import ReactDOM, {render} from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import styles, {getMuiTheme, MuiThemeProvider} from 'material-ui/styles';
import Test from './test.js'

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        <Link to={'/about'}>lllll</Link>
      </div>
    )
  }
})


const About = React.createClass({
  render() {
    return (
      <div>
        <h1>About</h1>
      </div>
    )
  }
})

const NoMatch = React.createClass({
  render() {
    return (
      <div>
        <h1>No</h1>
      </div>
    )
  }
})

render((
  <Router history={browserHistory}>
  <Route path="/App" component={App}/>
  <Route path="/" component={NoMatch}/>
  </Router>
), document.getElementById('top'))


// render(
//   <MuiThemeProvider >
//   <Test />
//   </MuiThemeProvider>
//   , document.getElementById('top'))
