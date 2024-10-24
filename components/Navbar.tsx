"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="menu-container">
          <button
            className="menu-toggle"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            ☰
          </button>
          <div className="logo">
            <Link href="/">Club LaNacion</Link>
          </div>
        </div>
        <form className={`search-bar ${isOpen ? "" : "hide"}`}>
          <div className="search-inputs">
            <input
              type="text"
              placeholder="Busca un comercio..."
              style={{
                border: "1px solid grey",
                backgroundColor: "transparent",
              }}
            />
            <input
              type="text"
              placeholder="Ingresa una ubicación..."
              style={{
                border: "1px solid grey",
                backgroundColor: "transparent",
              }}
            />
          </div>
          <button type="submit">🔎</button>
        </form>
        <div className={`dropdown ${isOpen ? "" : "hide"}`}>
          <Link href="/">🔔</Link>
          <Link href="/">❤️</Link>
          <Link href="/">😊</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
