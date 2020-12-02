import React from "react";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div>
      <footer>
        <a
          className="footer-link"
          href="https://www.linkedin.com/in/haris-jehangir-9721ab17b/"
        >
          LinkedIn
        </a>
        <a
          className="footer-link"
          href="https://harisjehangir.github.io/HJ-Personal-Site/"
        >
          CV
        </a>
        <a
          className="footer-link"
          href="https://www.facebook.com/MessiIsLove?ref=bookmarks"
        >
          Facebook
        </a>

        <p> Haris Jehangir © {year}. All Rights reserved.</p>
      </footer>
    </div>
  );
}

export default Footer;
