import React from "react";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare,
} from "react-icons/fa";
export default function Footer() {
  return (
    <footer>
      <a href="https://twitter.com/the_techpreneur">
        <FaTwitterSquare />
      </a>
      <a href="https://facebook.com/abhayvishnoi">
        <FaFacebookSquare />
      </a>
      <a href="https://instagram.com/thetechpreneur">
        <FaInstagramSquare />
      </a>
      <a href="https://github.com/abhayvishnoi">
        <FaGithubSquare />
      </a>
    </footer>
  );
}
