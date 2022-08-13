import { useDispatch, useSelector } from 'react-redux';
import { Label, Input } from './Filter.styled';
import { changeFilter, getFiltred } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const val = useSelector(state => state.filter);
  console.log(val);
  const onChange = e => {
    console.log(e.currentTarget.value);

    dispatch(changeFilter(e.currentTarget.value));
  };
  return (
    <div>
      <Label htmlFor="filterId">
        <Input
          name="filter"
          value={val}
          onChange={onChange}
          id="filterId"
          type="text"
        />
        Find contacts by name
      </Label>
    </div>
  );
};

export default Filter;
