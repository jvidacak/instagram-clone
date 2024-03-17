import React from 'react';
import Homepage from './Homepage';
import Sidenav from './navigation/Sidenav';
import './App.css'
import Timeline from './timeline/Timeline';
import Suggestions from './timeline/Suggestions';

const App = () => {
  return (
    <div>
      <Homepage />
      <Sidenav />
      <Timeline />
      <Suggestions />
    </div>
  );
}

export default App;
