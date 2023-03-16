import React from 'react';

import Dropdown from 'rsuite/Dropdown';
import 'rsuite/dist/rsuite.min.css';

const DropdownItem = ({ titleProp, activeKeyProp, options, propDrilling }) => {
  const dropdownHandler = (orderBy) => {
    propDrilling(orderBy);
  };

  return (
    <Dropdown
      title={titleProp}
      onSelect={dropdownHandler}
      trigger='hover'
      activeKey={`${activeKeyProp}`}
    >
      {options.map((item) => (
        <Dropdown.Item key={item.paramValue} eventKey={item.paramValue}>
          {item.text}
        </Dropdown.Item>
      ))}
    </Dropdown>
  );
};

export default DropdownItem;
