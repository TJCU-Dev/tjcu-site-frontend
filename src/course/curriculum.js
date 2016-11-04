import React from 'react';

import {grey200, grey400, grey800, grey900, grey600, red900} from 'material-ui/styles/colors';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';

export default class Curriculum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }



  render() {
    return (
      <div>
        <Table selectable={false} >
           <TableHeader enableSelectAll={false} displaySelectAll={false}>
              <TableRow >
                <TableHeaderColumn>周一</TableHeaderColumn>
                <TableHeaderColumn>周二</TableHeaderColumn>
                <TableHeaderColumn>周三</TableHeaderColumn>
                <TableHeaderColumn>周四</TableHeaderColumn>
                <TableHeaderColumn>周五</TableHeaderColumn>
                <TableHeaderColumn>周六</TableHeaderColumn>
                <TableHeaderColumn>周日</TableHeaderColumn>
              </TableRow>
          </TableHeader>
          <TableBody  displayRowCheckbox={true} >
             <TableRow >
               <TableRowColumn>油画人物</TableRowColumn>
               <TableRowColumn>当代水墨研习</TableRowColumn>
               <TableRowColumn>综合绘画</TableRowColumn>
               <TableRowColumn>当代水墨研习</TableRowColumn>
               <TableRowColumn>当代水墨研习</TableRowColumn>
               <TableRowColumn></TableRowColumn>
               <TableRowColumn>油画静物</TableRowColumn>
             </TableRow>
             <TableRow >
               <TableRowColumn>油画人物</TableRowColumn>
               <TableRowColumn>当代水墨研习</TableRowColumn>
               <TableRowColumn>综合绘画</TableRowColumn>
               <TableRowColumn>当代水墨研习</TableRowColumn>
               <TableRowColumn>当代水墨研习</TableRowColumn>
               <TableRowColumn></TableRowColumn>
               <TableRowColumn>油画静物</TableRowColumn>
             </TableRow>
             <TableRow >
               <TableRowColumn></TableRowColumn>
               <TableRowColumn></TableRowColumn>
               <TableRowColumn></TableRowColumn>
               <TableRowColumn></TableRowColumn>
               <TableRowColumn></TableRowColumn>
               <TableRowColumn></TableRowColumn>
               <TableRowColumn>油画静物</TableRowColumn>
             </TableRow>
             <TableRow >
               <TableRowColumn></TableRowColumn>
               <TableRowColumn></TableRowColumn>
               <TableRowColumn></TableRowColumn>
               <TableRowColumn></TableRowColumn>
               <TableRowColumn></TableRowColumn>
               <TableRowColumn></TableRowColumn>
               <TableRowColumn>油画静物</TableRowColumn>
             </TableRow>
             <TableRow >
               <TableRowColumn></TableRowColumn>
               <TableRowColumn></TableRowColumn>
               <TableRowColumn></TableRowColumn>
               <TableRowColumn></TableRowColumn>
               <TableRowColumn></TableRowColumn>
               <TableRowColumn></TableRowColumn>
               <TableRowColumn>油画静物</TableRowColumn>
             </TableRow>
             <TableRow >
               <TableRowColumn></TableRowColumn>
               <TableRowColumn></TableRowColumn>
               <TableRowColumn></TableRowColumn>
               <TableRowColumn></TableRowColumn>
               <TableRowColumn></TableRowColumn>
               <TableRowColumn></TableRowColumn>
               <TableRowColumn>油画静物</TableRowColumn>
             </TableRow>
           </TableBody>
        </Table>
      </div>
    )
  }
}
