import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { searchCountry } from '../redux/SearchApi';
import Search from '../Component/Search/Search';
import './home.css';
import PerCountry from '../Component/Card/PerCountry';

const Home = () => {
  const dispatch = useDispatch();
  const [getvalue, setGetvalue] = useState('');
  useEffect(() => {
    dispatch(searchCountry(getvalue));
  }, [getvalue]);

  const handleChange = (e) => {
    e.preventDefault();
    setGetvalue(e.target.value);
  };

  return (
    <main>
      <Search getvalue={getvalue} onChange={(e) => handleChange(e)} />
      <PerCountry />
    </main>
  );
};

export default Home;
