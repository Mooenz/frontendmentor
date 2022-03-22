import { useContext } from 'react';

//Components
import Project from '../Project';

//Filter
import { FilterContext } from '../../context/FilterContext';

//Styles
import { Projects } from './styles';

const index = () => {
  const { dataFilter } = useContext(FilterContext);
  
  return (
    <Projects>
      {dataFilter.map((item) => (
        <Project key={item.title} item={item} />
      ))}
    </Projects>
  );
};

export default index;
