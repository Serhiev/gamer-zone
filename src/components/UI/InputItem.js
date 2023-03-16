import React from 'react';
import { Input, InputGroup } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';

const InputItem = ({ propDrilling }) => {
  const inputHandler = (inputValue) => {
    propDrilling(inputValue);
  };

  return (
    <InputGroup>
      <Input onChange={inputHandler} />
      <InputGroup.Button>
        <SearchIcon />
      </InputGroup.Button>
    </InputGroup>
  );
};

export default InputItem;
