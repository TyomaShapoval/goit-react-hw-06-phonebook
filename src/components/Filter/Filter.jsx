// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { setFilter } from '../../redux/redusers/filter';
// import { FilterInput, Label } from './Filter.styled';

// const Filter = () => {
//   const filter = useSelector(state => state.filter);
//   const dispatch = useDispatch();

//   return (
//     <Label>
//       Find contacts by name
//       <FilterInput
//         type="text"
//         name="filter"
//         placeholder="Enter name"
//         value={filter}
//         onChange={event => dispatch(setFilter(event.currentTarget.value))}
//       />
//     </Label>
//   );
// };

// export default Filter;


import { useDispatch, useSelector } from 'react-redux';
import { setFilter, getFilterValue } from '../../redux/redusers/filter';
import { FilterInput, Label } from './Filter.styled';

function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterValue);
  return (
    <Label>
      Find contacts by name
      <FilterInput
        name="filter"
        type="text"       
        onChange={event => dispatch(setFilter(event.currentTarget.value))}
        value={filterValue}
      />
    </Label>
  );
}

export default Filter;