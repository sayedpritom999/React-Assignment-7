import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import { useState } from 'react';
import { useEffect } from 'react';
import Main from './components/Main/Main';



function App() {


  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <Main></Main>
      </header>
    </div>
  );
}

export default App;