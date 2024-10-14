import React from 'react';
import './App.css';
import './output.css';
import { NavBarItemInfo, renderNavBar } from './components';
import renderTitle from './components/title';

const navBarItems: Record<string, NavBarItemInfo> = 
{
  'home': {text: 'Home', url: '/'},
  'github': {text: 'GitHub', url: 'https://www.github.com/doanah2000'}
};

function App() {
  return (
    <div className=' bg-gray-light dark:bg-gray-dark size-full max-h-full min-h-screen'>
      {renderNavBar(navBarItems)}
      {renderTitle()}
    </div>

  );
}

export default App;
