import React from 'react';

import {grey200, grey400, grey800, grey900, grey600, red900} from 'material-ui/styles/colors';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';

export default class FinishCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleChange = (event) => {
    console.log(event)
    console.log(arguments[1])
    console.log(arguments[2])
  };


  render() {
    return (
      <div>
        <Table selectable={false} >
           <TableHeader enableSelectAll={false} displaySelectAll={false}>
              <TableRow >
                <TableHeaderColumn>课程号</TableHeaderColumn>
                <TableHeaderColumn>课程名</TableHeaderColumn>
                <TableHeaderColumn>序号</TableHeaderColumn>
                <TableHeaderColumn>学分</TableHeaderColumn>
                <TableHeaderColumn>考试时间</TableHeaderColumn>
                <TableHeaderColumn>平时成绩</TableHeaderColumn>
                <TableHeaderColumn>期末成绩</TableHeaderColumn>
                <TableHeaderColumn>总成绩</TableHeaderColumn>
              </TableRow>
          </TableHeader>
          <TableBody  displayRowCheckbox={true} >
             <TableRow >
               <TableRowColumn>1241702031</TableRowColumn>
               <TableRowColumn>毛泽东思想和中国特色社会主义理论体系概论实践</TableRowColumn>
               <TableRowColumn>3</TableRowColumn>
               <TableRowColumn>2</TableRowColumn>
               <TableRowColumn>20160701</TableRowColumn>
               <TableRowColumn>0</TableRowColumn>
               <TableRowColumn>78</TableRowColumn>
               <TableRowColumn>78</TableRowColumn>
             </TableRow>

           </TableBody>
        </Table>
      </div>
    )
  }
}
