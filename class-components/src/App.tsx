import Header from './components/header/header';
import Main from './components/main/main';
import './App.css';
import React from 'react';
import Footer from './components/footer/footer';

class App extends React.Component {
  render() {
    return (
      <>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </>
    )
  };
}

export default App;
