import React from 'react';
import './App.css';
import './output.css';
import renderNavBar from './components/navbar';
import renderTitle from './components/title';

function App() {
  return (
    <div className=' bg-gray-light dark:bg-gray-dark size-full max-h-full min-h-screen'>
      {renderNavBar()}
      {renderTitle()}
    </div>

  );
}

export default App;
