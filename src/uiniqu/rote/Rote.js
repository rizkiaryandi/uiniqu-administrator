import React from 'react';

import PageHeader from 'components/common/PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Tab } from 'react-bootstrap';

const Rote = () => {
  return (
    <>
      <PageHeader
        title="Hafalan"
        description="Riwayat Hafalan Al Quran Pengguna."
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

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos deserunt
        tempore cupiditate soluta ipsum. Eum, inventore illum. Vero quaerat qui,
        ad ab facilis quasi, a quod voluptatibus voluptas dicta debitis!
      </p>
    </>
  );
};

export default Rote;
