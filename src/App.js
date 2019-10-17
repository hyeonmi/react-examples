import React from 'react';
import './App.css';
import {ColorProvider} from './contexts/color';
import ColorBox from './components/ColorBox';
import SelectColors from './components/SelectColor';

function App() {
  return (
    <ColorProvider>
    <div className="App">
      <SelectColors />
      <ColorBox />
    </div>
    </ColorProvider>
  );
}

export default App;
