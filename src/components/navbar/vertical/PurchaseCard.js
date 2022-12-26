import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image from 'assets/img/icons/spot-illustrations/navbar-vertical.png';
import FalconCloseButton from 'components/common/FalconCloseButton';

const PurchaseCard = () => {
  const [show, setShow] = useState(true);
  return (
    show && (
      <div className="settings my-3">
        <Card className="p-0 rounded-2 position-relative">
          <div
            className="position-absolute"
            style={{ right: '3px', top: '3px' }}
          >
            <FalconCloseButton
              size="sm"
              noOutline
              onClick={() => setShow(false)}
            />
          </div>
          <Card.Body className="text-center">
            <img src={image} alt="" width={80} />
            <p className="fs--2 mt-2">
              Informasi lebih detail
              <br />
              Hubungi developer{' '}
              <Link to="https://founder.yandmedia.id">Uiniqu</Link>
            </p>
            <div className="d-grid gap-2">
              <Button
                as={'a'}
                href="https://founder.yandmedia.id/"
                target="_blank"
                size="sm"
                className="btn-purchase"
              >
                Kontak Developer
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    )
  );
};

export default PurchaseCard;
