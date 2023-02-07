import React from "react";
import Logo from "../assets/logo-1.png";
import Facebook from "./Icons/Facebook";
import Instagram from "./Icons/Instagram";
import LinkdIn from "./Icons/LinkedIn";

function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a
          href="/"
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
        >
          <img width={150} src={Logo} alt="logo" />
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2023 Altamish —
          <a
            href="https://twitter.com/knyttneve"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            altamishpasha@gmail.com
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Facebook/>
          <Instagram/>
          <LinkdIn/>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
