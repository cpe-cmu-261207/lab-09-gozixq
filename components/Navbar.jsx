import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header>
      <a href="/" class="logo">
        ME
      </a>
      <ul class="navbar" />

      <a
        href="/"
        class="active"
        style={{
          textDecoration: "none",
          padding: "6px,15px",
          color: "#1134a6",
          borderRadius: "20px",
        }}
      >
        Home
      </a>

      <a
        href="/Exp"
        style={{
          textDecoration: "none",
          padding: "6px,15px",
          color: "#1134a6",
          borderRadius: "20px",
        }}
      >
        Experience
      </a>

      <a
        href="/Contact"
        style={{
          textDecoration: "none",
          padding: "6px,15px",
          color: "#1134a6",
          borderRadius: "20px",
        }}
      >
        Contact
      </a>
      <a
        href="/lab-07"
        style={{
          textDecoration: "none",
          padding: "6px,15px",
          color: "#1134a6",
          borderRadius: "20px",
        }}
      >
        lab7
      </a>
    </header>
  );
}