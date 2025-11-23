import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  return (
    <>
      <div className={`header-container${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <div className="header-content">
            <div className="logo-container">
              <Link href="/">
                <Image
                  src="/image/logo.png"
                  alt="Importance Leadership"
                  width={120}
                  height={50}
                  priority
                />
              </Link>
            </div>
            <div className="nav-container">
              <nav className="main-nav d-none d-lg-flex">
                <div className="nav-item">
                  <Link href="/" className="nav-link">
                    <i className="fas fa-home me-2" />Home
                  </Link>
                </div>
                <div className="nav-item">
                  <Link href="/who-we-are" className="nav-link">
                    <i className="fas fa-users me-2" />Who We Are
                  </Link>
                </div>
                <div className="nav-item">
                  <Link href="/team" className="nav-link">
                    <i className="fas fa-user-friends me-2" />Our Team
                  </Link>
                </div>
                <div className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fas fa-globe-africa me-2" />Where We Work
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link href="/USA" className="dropdown-item">
                        <img src="https://cdn.jsdelivr.net/npm/flag-icons/flags/4x3/us.svg" width={18} className="me-2" alt="USA" />
                        USA
                      </Link>
                    </li>
                    <li>
                      <Link href="/Canada" className="dropdown-item">
                        <img src="https://cdn.jsdelivr.net/npm/flag-icons/flags/4x3/ca.svg" width={18} className="me-2" alt="Canada" />
                        Canada
                      </Link>
                    </li>
                    <li>
                      <Link href="/Kenya" className="dropdown-item">
                        <img src="https://cdn.jsdelivr.net/npm/flag-icons/flags/4x3/ke.svg" width={18} className="me-2" alt="Kenya" />
                        Kenya
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="nav-item">
                  <Link href="/what-we-do" className="nav-link">
                    <i className="fas fa-chart-line me-2" />What We Do
                  </Link>
                </div>
                <div className="nav-item">
                  <Link href="/impact" className="nav-link">
                    <i className="fas fa-chart-line me-2" />Impact
                  </Link>
                </div>
                <div className="nav-item">
                  <Link href="/blog" className="nav-link">
                    <i className="fas fa-blog me-2" />Blog
                  </Link>
                </div>
                <div className="nav-item">
                  <Link href="/events" className="nav-link">
                    <i className="fas fa-calendar-alt me-2" />Events
                  </Link>
                </div>
              </nav>
              <Link href="/donate" className="action-button d-none d-lg-inline-flex">
                <i className="fas fa-heartbeat me-2" />Donate
              </Link>
            </div>
            <button className="mobile-menu-button d-lg-none" aria-label="Toggle navigation" onClick={() => setMenuOpen(true)}>
              <i className="fas fa-bars" />
            </button>
          </div>
        </div>
      </div>
      <div className={`mobile-menu-container${menuOpen ? ' open' : ''}`}>
        <div className="mobile-menu-header">
          <div className="d-flex align-items-center">
            <Image src="/image/logo.png" alt="Logo" width={100} height={30} className="me-2" />
            <h5 className="mb-0">Importance Leadership</h5>
          </div>
          <button className="mobile-menu-button" aria-label="Toggle navigation" onClick={() => setMenuOpen(false)}>
            <i className="fas fa-times" />
          </button>
        </div>
        <div className="mobile-menu-body">
          <div className="mobile-nav-item">
            <Link href="/" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
              <i className="fas fa-home me-2" />Home
            </Link>
          </div>
          {/* ...add the rest of the mobile links as above */}
          <div className="mobile-nav-item mt-4">
            <Link href="/donate" className="action-button w-100 text-center py-2" onClick={() => setMenuOpen(false)}>
              <i className="fas fa-heartbeat me-2" />Donate
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
