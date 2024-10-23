import React from "react";
import "./table.css"

export default class Table extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <table className="main__table" id="pokemon-table">
          <thead>
            <th>Number</th>
            <th>Name</th>
            <th>Height</th>
            <th>Location Area</th>
            <th>Base Experience</th>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Bulbazavr</td>
              <td>20 cm</td>
              <td>Belarus</td>
              <td>Earth</td>
            </tr>
          </tbody>
        </table>
      </>
    )
  }
}
