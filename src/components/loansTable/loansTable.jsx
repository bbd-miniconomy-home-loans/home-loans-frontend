import {Table, TableHead, HeaderRow, HeaderCell, TableBody, Row, Cell} from '@leafygreen-ui/table';
import React from 'react';


export const LoansTable = () => {
  const data = makeData(false, 100);
  const columns = Object.keys(data[0]).filter(
    x => x !== 'renderExpandedContent' && x !== 'subRows',
  );
  return (
    <Table >
      <TableHead>
        <HeaderRow>
          {columns.map((columnName) => (
            <HeaderCell key={columnName}>{columnName}</HeaderCell>
          ))}
        </HeaderRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <Row key={row.id}>
            {Object.keys(row).map((cellKey, index) => {
              return <Cell key={`${cellKey}-${index}`}>{row[cellKey]}</Cell>;
            })}
          </Row>
        ))}
      </TableBody>
    </Table>
  );
}
