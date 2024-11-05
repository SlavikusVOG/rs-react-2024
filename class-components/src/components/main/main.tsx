import React from "react";
import Table from "./table";
import Pokemon from "../../types/Pokemon";

export default class Main extends React.Component<{data: Array<Pokemon>}> {
  render() {
    return (
      <>
        <Table data={this.props.data}></Table>
      </>
    )
  }
}
