import { useState } from 'react';

//Data
import data from '../constants/data.json';

//Context
import { FilterContext } from '../context/FilterContext';

const UseFilter = ({ children }) => {
  let dataArray = Object.values(data);

  const [dataFilter, setDataFilter] = useState(dataArray);

  return (
    <FilterContext.Provider value={{ dataArray, dataFilter, setDataFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export default UseFilter;
