import React from "react";

export default function Footer() {
  let copyright =
    "Copyright © " + new Date().getFullYear() + " Current Weather App";
  return (
    <>
      <footer className="cursornone">{copyright}</footer>
    </>
  );
}
