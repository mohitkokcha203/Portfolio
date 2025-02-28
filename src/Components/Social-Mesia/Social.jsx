import React from "react";
import "./Social.css";
import { BsTelegram } from "react-icons/bs";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { FaSquareGithub } from "react-icons/fa6";

function Social() {
  return (
    <div className="social">
      <div className="social-icon">
        <ul className="icon-list">
          <li className="list">
            <a
              href="https://www.linkedin.com/in/mohit-kumar-kokcha-95587722a/"
              target="_blank"
              rel="noreferrer noopener"
              className="icon "
            >
              <BsLinkedin />
            </a>
          </li>
          <li className="list">
            <a
              href="https://github.com/mohitkokcha203"
              target="_blank"
              rel="noreferrer noopener"
              className="icon icon-unique "
            >
              <FaSquareGithub />
            </a>
          </li>
          <li className="list">
            <a
              href="https://api.whatsapp.com/qr/7WW2CLMXCVCLJ1?autoload=1&app_absent=0"
              target="_blank"
              rel="noreferrer noopener"
              className="icon icon-unique"
            >
              <FaSquareWhatsapp />
            </a>
          </li>

          <li className="list">
            <a
              href="https://t.me/+r_xj43LlHEQ3NTA9"
              target="_blank"
              rel="noreferrer noopener"
              className="icon icon-unique"
            >
              <BsTelegram />
            </a>
          </li>
          <li className="list">
            <a
              href="/"
              target="_blank"
              rel="noreferrer noopener"
              className="icon"
            >
              <BsFacebook />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Social;
