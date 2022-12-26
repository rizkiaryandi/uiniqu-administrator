import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { get, post, put, del, setUser, getUser } from 'uiniqu/base';
// import SocialAuthButtons from './SocialAuthButtons';

const LoginForm = ({ hasLabel, layout }) => {
  // State
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    remember: false
  });

  // Handler
  const handleSubmit = e => {
    e.preventDefault();

    // console.log(`${formData.username} and ${formData.password}`);
    // location.href = '/';

    let fd = new FormData();
    fd.append('username', formData.username);
    fd.append('password', formData.password);
    post('login', fd)
      .then(result => {
        if (result.data.data.name !== undefined) {
          toast.success(`Masuk sebagai ${result.data.data.name}`, {
            theme: 'colored'
          });
          console.log(result.data.data);
          setUser(result.data.data);
          setTimeout(() => {
            location.href = '/';
          }, 3000);
        } else
          toast.warning('Username/Password salah', {
            theme: 'colored'
          });
      })
      .catch(() => {
        toast.error('Terjadi kesalahan saat masuk', {
          theme: 'colored'
        });
      });
  };

  const handleFieldChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        {hasLabel && <Form.Label>Username</Form.Label>}
        <Form.Control
          placeholder={!hasLabel ? 'Username' : ''}
          value={formData.username}
          name="username"
          onChange={handleFieldChange}
          type="text"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        {hasLabel && <Form.Label>Password</Form.Label>}
        <Form.Control
          placeholder={!hasLabel ? 'Password' : ''}
          value={formData.password}
          name="password"
          onChange={handleFieldChange}
          type="password"
        />
      </Form.Group>

      <Row className="justify-content-between align-items-center">
        <Col xs="auto">
          <Form.Check type="checkbox" id="rememberMe">
            <Form.Check.Input
              type="checkbox"
              name="remember"
              checked={formData.remember}
              onChange={e =>
                setFormData({
                  ...formData,
                  remember: e.target.checked
                })
              }
            />
            <Form.Check.Label className="mb-0">Remember Me</Form.Check.Label>
          </Form.Check>
        </Col>

        <Col xs="auto">
          {/* <Link
            className="fs--1 mb-0"
            to={`/authentication/${layout}/forgot-password`}
          >
            Forget Password?
          </Link> */}
        </Col>
      </Row>

      <Form.Group>
        <Button
          to="/"
          type="submit"
          color="primary"
          className="mt-3 w-100"
          disabled={!formData.username || !formData.password}
        >
          Log in
        </Button>
      </Form.Group>

      {/* <Divider className="mt-4">or log in with</Divider> */}

      {/* <SocialAuthButtons /> */}
    </Form>
  );
};

LoginForm.propTypes = {
  layout: PropTypes.string,
  hasLabel: PropTypes.bool
};

LoginForm.defaultProps = {
  layout: 'simple',
  hasLabel: false
};

export default LoginForm;
