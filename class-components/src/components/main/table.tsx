import React from "react";
import "./table.css"
import Pokemon from "../../types/Pokemon";

export default class Table extends React.Component<{data: Array<Pokemon>}> {
  render() {
    const data = this.props.data;
    const tBody = document.createElement("tbody");
    data.forEach((pokemon: Pokemon) => {
      const idElement = document.createElement("td");
      idElement.textContent = pokemon.id.toString();
      const nameElement = document.createElement("td");
      nameElement.textContent = pokemon.name;
      const heightElement = document.createElement("td");
      heightElement.textContent = pokemon.height.toString();
      const locationElement = document.createElement("td");
      locationElement.textContent = pokemon.location_area_encounters;
      const experienceElement = document.createElement("td");
      experienceElement.textContent = pokemon.base_experience.toString();
      tBody.appendChild(idElement);
      tBody.appendChild(nameElement);
      tBody.appendChild(heightElement);
      tBody.appendChild(locationElement);
      tBody.appendChild(experienceElement);
    })
    return (
      <>
        <table className="main__table" id="pokemon-table">
          <thead>
            <tr>
              <th>Number</th>
              <th>Name</th>
              <th>Height</th>
              <th>Location Area</th>
              <th>Base Experience</th>
            </tr>
          </thead>
          {tBody.nodeValue}
        </table>
      </>
    )
  }
}
