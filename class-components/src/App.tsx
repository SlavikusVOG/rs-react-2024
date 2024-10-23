import Header from './components/header/header';
import Main from './components/main/main';
import './App.css';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <>
        <Header></Header>
        <Main></Main>
      </>
    )
  };
}

export default App;
