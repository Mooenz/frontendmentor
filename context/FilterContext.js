import { createContext, useState } from 'react';

//Data
import data from '../constants/data.json';

export const FilterContext = createContext();

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