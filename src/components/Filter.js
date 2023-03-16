import React from 'react';
import MultilevelDropdownItem from './UI/MultilevelDropdownItem';
import DropdownItem from './UI/DropdownItem';

import { useDispatch, useSelector } from 'react-redux';
import { setOrderBy, setReleaseDate, setOrderType, setSearchQuery } from '../app/filterSlice';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Toggle } from 'rsuite';
import InputItem from './UI/InputItem';

const years = [
  { '1990-1999': [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999] },
  { '2000-2009': [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009] },
  { '2010-2019': [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019] },
  { '2020-2023': [2020, 2021, 2022, 2023] },
];

const options = [
  { paramValue: 'rating', text: 'Average rating' },
  { paramValue: 'added', text: 'Popularity' },
  { paramValue: 'released', text: 'Release date' },
  { paramValue: 'name', text: 'Name' },
];

// const platforms = [
//   { PC: [] },
//   { Linux: [] },
//   {
//     PlayStation: [
//       'PlayStation 5',
//       'PlayStation 4',
//       'PlayStation 3',
//       'PlayStation 2',
//       'PlayStation',
//     ],
//   },
//   { Xbox: ['Xbox One', 'Xbox Series S/X', 'Xbox 360', 'Xbox'] },
//   { iOS: [] },
//   { Andorid: [] },
// ];

const Filter = () => {
  const dispatch = useDispatch();

  // console.log(selectedOrderType);
  const OrderTypeHandler = (toggleValue) => {
    if (toggleValue) {
      dispatch(setOrderType('ASC'));
    } else {
      dispatch(setOrderType('DESC'));
    }
  };

  const selectedOrderBy = useSelector((state) => state.filter.orderBy);
  // console.log(selectedOrderBy);
  const orderByHandler = (orderByValue) => {
    dispatch(setOrderBy(orderByValue));
  };
  let objOrderByOptions = options.find(
    (o) => o.paramValue === selectedOrderBy || '-' + o.paramValue === selectedOrderBy,
  );

  const selectedReleaseDate = useSelector((state) => state.filter.releaseDate);
  // console.log(selectedReleaseDate);
  const releaseDateHandler = (year) => {
    dispatch(setReleaseDate(year));
  };

  // const selectedPlatformTypes = useSelector((state) => state.filter.platformTypes);
  // console.log(selectedPlatformTypes);
  // const platformTypesHandler = (platformTypes) => {
  //   dispatch(setPlatformTypes(platformTypes));
  // };

  const inputtedSearchQuery = useSelector((state) => state.filter.searchQuery);
  // console.log(inputtedSearchQuery);
  const searchQueryHandler = (searchQuery) => {
    dispatch(setSearchQuery(searchQuery));
  };

  return (
    <Row className='my-4'>
      <Col md={1}>
        <Toggle
          size='md'
          checkedChildren='ASC'
          unCheckedChildren='DESC'
          onChange={OrderTypeHandler}
        />
      </Col>
      <Col md={2}>
        <DropdownItem
          titleProp={`Order by: ${objOrderByOptions.text}`}
          activeKeyProp={selectedOrderBy}
          options={options}
          propDrilling={orderByHandler}
        />
      </Col>
      <Col md={2}>
        <MultilevelDropdownItem
          titleProp={`Release date: ${selectedReleaseDate}`}
          activeKeyProp={selectedReleaseDate}
          multilevelArray={years}
          propDrilling={releaseDateHandler}
        />
      </Col>
      <Col md={2}>
        {/*<MultilevelDropdownItem*/}
        {/*  titleProp={`Platforms: ${selectedPlatformTypes}`}*/}
        {/*  activeKeyProp={selectedPlatformTypes}*/}
        {/*  multilevelArray={platforms}*/}
        {/*  propDrilling={platformTypesHandler}*/}
        {/*/>*/}
      </Col>
      <Col md={{ span: 4, offset: 1 }}>
        <InputItem propDrilling={searchQueryHandler} />
      </Col>
    </Row>
  );
};

export default Filter;
