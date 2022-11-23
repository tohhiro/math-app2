import React from 'react';
import Header from './components/Header/Header'
import Left from './components/Left/Left'
import Center from './components/Center/Center'
import Right from './components/Right/Right'
import classes from './App.module.scss';

function App() {
  return (
    <div className={classes.app}>
      <Header/>
      <main className={classes.main}>
        <Left/>
        <Center/>
        <Right/>
      </main>
    </div>
  );
}

export default App;
