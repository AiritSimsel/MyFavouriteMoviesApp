import React from "react";

let currentDate = new Date().toLocaleDateString();

function Footer({ myName }) {
  return (
    <footer>
      <p>
        Copyright &#169; {currentDate}
      </p>
    </footer>
  );
}

export default Footer;
