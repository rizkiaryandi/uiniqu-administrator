import React, { useContext, useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import AdvanceTable from 'components/common/advance-table/AdvanceTable';
import AdvanceTableFooter from 'components/common/advance-table/AdvanceTableFooter';
import AdvanceTableSearchBox from 'components/common/advance-table/AdvanceTableSearchBox';
import AdvanceTablePagination from 'components/common/advance-table/AdvanceTablePagination';
import AdvanceTableWrapper from 'components/common/advance-table/AdvanceTableWrapper';

const UiniquTable = ({ columns, data }) => {
  return (
    <Card>
      <Card.Body className="position-relative">
        <AdvanceTableWrapper
          columns={columns}
          data={data}
          sortable
          pagination
          perPage={5}
        >
          <Row className="flex-end-center mb-3">
            <Col xs="auto" sm={6} lg={4}>
              <AdvanceTableSearchBox table />
            </Col>
          </Row>
          <AdvanceTable
            table
            headerClassName="bg-200 text-900 text-nowrap align-middle"
            rowClassName="align-middle white-space-nowrap"
            tableProps={{
              bordered: true,
              striped: true,
              className: 'fs--1 mb-0 overflow-hidden'
            }}
          />
          <div className="mt-3">
            <AdvanceTablePagination table />
            <AdvanceTableFooter
              rowCount={data.length}
              table
              rowInfo
              navButtons
              rowsPerPageSelection
            />
          </div>
        </AdvanceTableWrapper>
      </Card.Body>
    </Card>
  );
};

export default UiniquTable;
