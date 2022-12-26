import React, { useState, useEffect } from 'react';

import PageHeader from 'components/common/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Tab } from 'react-bootstrap';
import UiniquTable from 'uiniqu/components/UiniquTable';
import { get, getUser } from 'uiniqu/base';

const Tadarus = () => {
  const [data, setData] = useState([]);

  const columns = [
    {
      accessor: 'user_uid',
      Header: 'Pengguna'
    },
    {
      accessor: 'created_at',
      Header: 'Disimpan'
    },
    {
      accessor: 'surah_name',
      Header: 'Nama Surat'
    },
    {
      accessor: 'ayah_number',
      Header: 'Nomor Ayat'
    }
  ];

  const getTadarus = () => {
    get('tadarus', {
      header: new Headers({
        Authorization: getUser().token
      })
    }).then(result => {
      setData(result.data.data);
    });
  };

  useEffect(() => {
    if (data.length == 0) {
      getTadarus();
    }
  });
  return (
    <>
      <PageHeader
        title="Tadarus"
        description="Riwayat Bacaan Al Quran Pengguna."
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

export default Tadarus;
