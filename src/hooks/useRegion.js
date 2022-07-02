import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadApiData } from '../redux/SearchApi';

const useRegion = () => {
  const dispatch = useDispatch();
  const region = useSelector((state) => state.countries);
  useEffect(() => {
    if (region.length === 0) {
      dispatch(loadApiData());
    }
  });
  return { region };
};

export default useRegion;
