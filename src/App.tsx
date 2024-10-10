import React from 'react';
import logo from './logo.svg';
import './App.css';
import renderNameTitle, { NameProfile } from './components/name';
import renderNavBar from './components/navbar';
import { CanvasContainer } from './components/canvas-container';
import { NavBarProps, NavBarLink } from './components/navbar';

const profileName: NameProfile = {
  firstName: 'Andrew',
  lastName: 'Doan',
  nickName: 'Andy'
}

const navBarHome: NavBarLink = {
  text: 'Home',
  link: 'https://doanah2000.github.io'
}
const navBarGH: NavBarLink = {
  text: 'GitHub',
  link: 'https://www.github.com/doanah2000'
}

const navBarProps: NavBarProps = {
  navBarLinks: [navBarHome, navBarGH]
}

function App() {
  return (
    <div className="App">
      <CanvasContainer>
        {renderNavBar(navBarProps)}
        {renderNameTitle(profileName)}
      </CanvasContainer>
    </div>
  );
}

export default App;
