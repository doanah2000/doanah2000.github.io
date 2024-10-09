import React from 'react';
import logo from './logo.svg';
import './App.css';
import renderNameTitle, { NameProfile } from './components/name';
import { CanvasContainer } from './components';

const profileName: NameProfile = {
  firstName: 'Andrew',
  lastName: 'Doan',
  nickName: 'Andy'
}

function App() {
  return (
    <div className="App">
      <CanvasContainer>
        {renderNameTitle(profileName)}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </CanvasContainer>
    </div>
  );
}

export default App;
