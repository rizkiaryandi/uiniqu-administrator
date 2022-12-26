import React, { useState, useEffect } from 'react';

import PageHeader from 'components/common/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Tab } from 'react-bootstrap';
import UiniquTable from 'uiniqu/components/UiniquTable';
import { get, getUser } from 'uiniqu/base';

const Users = () => {
  const [data, setData] = useState([]);

  const columns = [
    {
      accessor: 'uuid',
      Header: 'UUID'
    },
    {
      accessor: 'name',
      Header: 'Nama Lengkap'
    },
    {
      accessor: 'username',
      Header: 'Nama Pengguna'
    },
    {
      accessor: 'created_at',
      Header: 'Bergabung'
    }
  ];

  const getUsers = () => {
    get('user', {
      header: new Headers({
        Authorization: getUser().token
      })
    }).then(result => {
      setData(result.data.data);
    });
  };

  useEffect(() => {
    if (data.length == 0) {
      getUsers();
    }
  });

  return (
    <>
      <PageHeader
        title="Pengguna"
        description="Daftar Pengguna Uiniqu."
        className="mb-3"
      >
        <Button
          href=""
          target="_blank"
          variant="link"
          size="sm"
          className="ps-0"
        >
          Refresh Data
          <FontAwesomeIcon icon="chevron-right" className="ms-1 fs--2" />
        </Button>
      </PageHeader>

      <UiniquTable columns={columns} data={data}></UiniquTable>
    </>
  );
};

export default Users;
