import React from "react";
import "./footer.css";

export default class Footer extends React.Component {
  render() {
    return (
      <>
        <footer>
          <ul className="footer-list">
            <li>&copy; <span id="currentYear">{new Date().getFullYear()}</span> SlavikusVOG</li>
            <li><a href="https://rs.school/">RS School</a></li>
            <li><a href="mailto: slavaolish@gmail.com">E-mail</a></li>
            <li><a href="https://github.com/SlavikusVOG">Github</a></li>
          </ul>
        </footer>
      </>
    )
  }
}
