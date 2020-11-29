import React from "react";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div>
      <footer>
        <p> Haris Jehangir © {year}. All Rights reserved.</p>
      </footer>
    </div>
  );
}

export default Footer;
