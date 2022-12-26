import React, { useState, useEffect } from 'react';

import PageHeader from 'components/common/PageHeader';
import { Button, Modal, Form } from 'react-bootstrap';
import UiniquTable from 'uiniqu/components/UiniquTable';
import { get, post, getUser } from 'uiniqu/base';
import swal from 'sweetalert';

const Agencies = () => {
  const hasLabel = true;
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  const columns = [
    {
      accessor: 'uuid',
      Header: 'UUID'
    },
    {
      accessor: 'agency_name',
      Header: 'Nama Instansi'
    },
    {
      accessor: 'created_at',
      Header: 'Bergabung'
    }
  ];

  const [formData, setFormData] = useState({
    agency_name: '',
    agency_detail: 'aa'
  });

  const addAgency = e => {
    e.preventDefault();
    let fd = new FormData();
    fd.append('agency_name', formData.agency_name);
    fd.append('agency_detail', formData.agency_detail);
    // console.log(formData);

    post('agency', fd, {
      headers: {
        Authorization: getUser().token
      }
    })
      .then(result => {
        console.log(result);
        swal(
          'Registrasi berhasil',
          `${formData.agency_name} ditambahkan`,
          'success'
        ).then(() => {
          setFormData({
            agency_name: '',
            agency_detail: 'aa'
          });

          setModalShow(false);

          getAgencies();
        });
      })
      .catch(() => {
        swal(
          'Oops',
          `Terjadi kesalahan, silahkan coba ulang setelah beberapa saat`,
          'error'
        ).then(() => {
          setFormData({
            agency_name: '',
            agency_detail: 'aa'
          });

          setModalShow(false);
        });
      });
  };

  const handleFieldChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const getAgencies = () => {
    get('/agency', {
      header: new Headers({
        Authorization: getUser().token
      })
    }).then(result => {
      setData(result.data.data);
    });
  };

  useEffect(() => {
    if (data.length == 0) {
      getAgencies();
    }
  });

  return (
    <>
      <PageHeader
        title="Instansi"
        description="Daftar lembaga-lembaga yang bekerja sama dengan Uiniqu."
      >
        <Button
          size="sm"
          onClick={() => {
            setModalShow(true);
          }}
        >
          Register Instansi
        </Button>
      </PageHeader>

      <UiniquTable columns={columns} data={data}></UiniquTable>

      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Registrasi Instansi
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={addAgency}>
            <Form.Group className="mb-3">
              {hasLabel && <Form.Label>Nama Instansi</Form.Label>}
              <Form.Control
                placeholder={!hasLabel ? 'Instansi' : ''}
                value={formData.agency_name}
                name="agency_name"
                onChange={handleFieldChange}
                type="text"
              />
            </Form.Group>
            <Form.Group>
              <Button
                to="/"
                type="submit"
                color="primary"
                className="mt-3 w-100"
                disabled={!formData.agency_name}
              >
                Register
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setModalShow(false)}>Tutup</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Agencies;
