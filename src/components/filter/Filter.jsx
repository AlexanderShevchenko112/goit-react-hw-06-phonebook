import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/store';
import css from 'components/filter/Filter.module.css';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div className={css.filter}>
      <label htmlFor="filterInput">Filter contacts by name: </label>
      <input
        type="text"
        id="filterInput"
        name="filter"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};

export default Filter;
