import { Label, InpuStyle, FilterBox } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'redux/itemsSlice/filterSlice.js';
import { selectFilterValue } from 'redux/selectors.js';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilterValue);
  return (
    <FilterBox>
      <Label>
        Enter contact name
        <InpuStyle
          type="text"
          value={filterValue}
          onChange={e => dispatch(filterContacts(e.currentTarget.value))}
        />
      </Label>
    </FilterBox>
  );
};
