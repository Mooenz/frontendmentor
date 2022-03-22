import { useContext } from 'react';

//Filter
import { FilterContext } from '../../context/FilterContext';

// Styles
import { Container, Button } from './styles';

const Filter = () => {
  const { dataArray, setDataFilter } = useContext(FilterContext);

  const handelFilter = (filter) => {
    const dataArrayFilter = dataArray.filter((item) => {
      return item.tag === filter;
    });

    if (filter === 'newbie' || 'junior') {
      setDataFilter(dataArrayFilter);
    }

    filter === 'all' && setDataFilter(dataArray);
  };

  return (
    <Container>
      <Button onClick={() => handelFilter('all')}>All</Button>
      <Button onClick={() => handelFilter('newbie')}>Newbie</Button>
      <Button onClick={() => handelFilter('junior')}>Junior</Button>
    </Container>
  );
};

export default Filter;
