import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container-fluid">
          {/* Logo */}
          <Link href="/" className="navbar-brand logo" aria-label="Home">
            <img src="/image/IL02 (1).png" alt="Importance Leadership Logo" className="logo-image" />
          </Link>

          {/* Hamburger Menu */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto" id="navbarLinks">
              {/* Who We Are */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="whoWeAreDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Who We Are
                </a>
                <ul className="dropdown-menu shadow-sm">
                  <li><Link className="dropdown-item" href="/who-we-are#about">About</Link></li>
                  <li><Link className="dropdown-item" href="/who-we-are#mission">Mission</Link></li>
                  <li><Link className="dropdown-item" href="/who-we-are#vision">Vision</Link></li>
                  <li><Link className="dropdown-item" href="/team">Team</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/what-we-do">
                  What We Do
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/impact">
                  Impact
                </Link>
              </li>
              <li className="nav-item ms-lg-3">
                <Link className="nav-link" href="/donate">DONATE</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
