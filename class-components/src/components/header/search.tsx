import React from "react";
import HttpRequestService from "../../services/HttpRequestService";
import LSService from "../../services/LSService";
import { HandleSearchDataFunction } from "../../types/Functions";

export default class Search extends React.Component<{onSearch: HandleSearchDataFunction}, {value: string}> {
  dataListID: string;
  // Initialize state and bind methods
  constructor(props: {onSearch: HandleSearchDataFunction}) {
    super(props);
    this.state = {
      value: "",
    }
    this.dataListID = "dataListID";
  }

  // Capture DOM state before updates
  getSnapshotBeforeUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>) {
      
  }

  // Fetch data, set up subscriptions
  componentDidMount(): void {
      
  }

  // Handle errors from child components and prevent the app from crashing
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
      
  }

  // Act on prop/state changes, fetch data when props update
  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
      
  }

  // Cleanup: cancel requests, remove listeners
  componentWillUnmount(): void {
      
  }

  // Optimize performance by controlling re-rendering
  shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean {
      
  }

  keyPressHandler(event: { key: unknown; }) {
    debugger;
    const searchInput: HTMLInputElement | null = this.getSearchInput();
    const value = searchInput?.value;
    const key = event.key
  }

  async buttonClickHandler(/* event */) {
    debugger;
    try {
      const data = await HttpRequestService.getPokemon(this.state.value);
      this.props.onSearch(data);
    }
    catch(error) {
      console.error("Error: ", error);
    }
  }

  getSearchInput() {
    return document.getElementById("searchPokemonID") as HTMLInputElement;
  }

  async submitHandler() {
    // const se
    const searchInput = this.getSearchInput();
    const searchValue = searchInput.value;
    LSService.addSearchString(searchValue);
    const data = await HttpRequestService.getPokemon(searchValue);
    if (data) {
      this.props.onSearch(data);
    }
  };

  handleSearchInputChange(event: React.FormEvent<HTMLInputElement>) {
    if (event.target instanceof HTMLInputElement) {
      this.setState({value: event?.target?.value})
    }
  }

  // Render the component layout
  render() {
    // return React.createElement("input", null, "");
    const previousValues: Array<string> = ["ba", "bi", "bu", "be", "bo"];
    const dataListOptions: Array<React.ReactNode> = [];
    previousValues.forEach((v, index) => {
      const optionElement = React.createElement(
        "option",
        {value: v, key: index}
      );
      dataListOptions.push(optionElement);
    });
    const dataList = React.createElement(
      "datalist",
      {id: this.dataListID},
      dataListOptions
    );

    return (
      <>
        <form className="header__form">
          <input
            id="searchPokemonID"
            className="header__search-field"
            type="search"
            onChange={this.handleSearchInputChange}
            name="search-pokemon"
            placeholder="type pokemon attributes"
            onKeyUp={this.keyPressHandler}
            list="previous-search"
            value={this.state.value}
          ></input>
          <button
            className="header__search-button"
            onClick={this.buttonClickHandler}
          >Search</button>
        </form>
        {dataList}
      </>
    )
  }
}
