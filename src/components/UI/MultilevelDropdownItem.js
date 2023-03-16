import React from 'react';

import { Dropdown } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

const MultilevelDropdownItem = ({ titleProp, activeKeyProp, multilevelArray, propDrilling }) => {
  const dropdownHandler = (value) => {
    propDrilling(value);
  };

  function itemOrMenu(obj) {
    let objKey = Object.keys(obj);
    if (obj[objKey].length > 0) {
      return (
        <Dropdown.Menu key={objKey} title={objKey}>
          <Dropdown.Item disabled eventKey={objKey}>
            {objKey}
          </Dropdown.Item>
          <Dropdown.Separator />
          {obj[objKey].map((item) => (
            <Dropdown.Item key={item} eventKey={item}>
              {item}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      );
    } else {
      return (
        <Dropdown.Item key={objKey} eventKey={objKey[0]}>
          {objKey}
        </Dropdown.Item>
      );
    }
  }

  return (
    <Dropdown
      title={titleProp}
      onSelect={dropdownHandler}
      trigger='hover'
      activeKey={activeKeyProp}
    >
      {multilevelArray.map((objValue) => itemOrMenu(objValue))}
    </Dropdown>
  );
};

export default MultilevelDropdownItem;
