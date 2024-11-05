import Header from './components/header/header';
import Main from './components/main/main';
import './App.css';
import React from 'react';
import Footer from './components/footer/footer';
import Pokemon from './types/Pokemon';
import { HandleSearchDataFunction } from './types/Functions';
import HttpRequestService from './services/HttpRequestService';

class App extends React.Component<object, {searchResult: Array<Pokemon> | null}> {
  state = {
    searchResult: [],
  }

  handleSearchData: HandleSearchDataFunction = (data: Array<Pokemon> | null) => {
    this.setState({ searchResult: data });
  }

  componentDidMount(): void {
    this.fetchData();
  }

  async fetchData() {
    try {
      const data = await HttpRequestService.getAllPokemon();
      this.setState({searchResult: data})
    }
    catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  render() {
    return (
      <>
        <Header onSearch={this.handleSearchData}></Header>
        <Main data={this.state.searchResult}></Main>
        <Footer></Footer>
      </>
    )
  };
}

export default App;
