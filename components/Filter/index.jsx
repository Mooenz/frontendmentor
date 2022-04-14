import { useState, useContext } from 'react';

//Filter
import { FilterContext } from '../../context/FilterContext';

// Styles
import { Container, Button } from './styles';

const Filter = () => {
  // Tap active
  const [tap, setTap] = useState('all');

  // Context
  const { dataArray, setDataFilter } = useContext(FilterContext);

  const handelFilter = (filter) => {
    setTap(filter);

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
      <Button
        tapActive="all"
        selectTap={tap}
        onClick={() => handelFilter('all')}
      >
        All
      </Button>
      <Button
        tapActive="newbie"
        selectTap={tap}
        onClick={() => handelFilter('newbie')}
      >
        Newbie
      </Button>
      <Button
        tapActive="junior"
        selectTap={tap}
        onClick={() => handelFilter('junior')}
      >
        Junior
      </Button>
    </Container>
  );
};

export default Filter;
