import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const style = {
  margin: '50px 0 0',
  // display: 'flex',
  // textAlign: 'center',
  // justifyContent: 'center',
};

function ErrorPageNotFound() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="container">
        <h1 style={{ ...style }}>Ошибка - Страница не найдена</h1>
      </div>
    </>
  );
}

export default ErrorPageNotFound;
