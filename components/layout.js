import React, { useEffect, useState } from 'react';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { setZipCode } from '../redux/actions';

import Menu from './Menu';
import Footer from './Footer/Footer';
import Alert from '../components/Alert/Alert';

// API - Maps
import {
  getCoordinates,
  getZip,
  returnZip,
} from '../helpers/api-calls/map-calls';

export default function Layout({ children }) {
  const hasAlert = useSelector((state) => state.alert.isActive);
  const buying = useSelector((state) => state.buying);
  const dispatch = useDispatch();

  const getZip = async (position) => {
    const { latitude, longitude } = position.coords;
    let zipReturned = returnZip(latitude, longitude);
    zipReturned.then((res) => {
      dispatch(setZipCode(res));
    });
  };

  useEffect(() => {
    getCoordinates(getZip);
  }, []);

  return (
    <>
      <Menu />
      <main>
        {hasAlert && <Alert />}
        {children}
      </main>
      <Footer />
    </>
  );
}
