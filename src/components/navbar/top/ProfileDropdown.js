import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import team3 from 'assets/img/team/3.jpg';
import Avatar from 'components/common/Avatar';

const ProfileDropdown = () => {
  return (
    <Dropdown navbar={true} as="li">
      <Dropdown.Toggle
        bsPrefix="toggle"
        as={Link}
        to="#!"
        className="pe-0 ps-2 nav-link"
      >
        <Avatar
          src={
            'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI='
          }
        />
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-caret dropdown-menu-card  dropdown-menu-end">
        <div className="bg-white rounded-2 py-2 dark__bg-1000">
          <Dropdown.Item as={Link} to="/user/profile">
            Profile &amp; account
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item as={Link} to="/user/settings">
            Settings
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/logout">
            Logout
          </Dropdown.Item>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ProfileDropdown;
