import React from "react";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="footer py-5" style={{ backgroundImage: "url('/image/coming-soon.jpg')", backgroundSize: "auto" }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-6 text-center text-lg-start mb-4 mb-lg-0">
            <Link href="/">
              <img src="/image/IL02 (1).png" alt="Importance Leadership" style={{ width: "200px", height: "auto" }} />
            </Link>
            <ul className="list-unstyled mt-3">
              <li><Link href="/who-we-are" className="text-white fw-bold">Who We Are</Link></li>
              <li><Link href="/what-we-do" className="text-white fw-bold">What We Do</Link></li>
              <li><Link href="/impact" className="text-white fw-bold">Impact</Link></li>
              <li><Link href="/donate" className="text-white fw-bold">Donate</Link></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 text-center text-lg-start mb-4 mb-lg-0">
            <h5 className="fw-bold">Get in Touch</h5>
            <p className="text-info text-center" style={{ fontStyle: "italic" }}>
              We'd love to hear from you! Whether you have questions or feedback or are interested in getting involved with Importance Leadership, our team is here to help
            </p>
            <p><i className="fas fa-phone-alt me-2"></i> <a href="tel:+16037150801" className="text-white">+1 (603) 715-0801</a></p>
            <p><i className="fas fa-envelope me-2"></i> <a href="mailto:info@importanceleadership.com" className="text-white">info@importanceleadership.com</a></p>
            <div className="social-media mt-3">
              <Link href="https://www.instagram.com/importance_leadership_" className="me-3" aria-label="Instagram"><i className="fab fa-instagram"></i></Link>
              <Link href="https://www.facebook.com/share/12J1CX4vLQ8/?mibextid=wwXIfr" className="me-3" aria-label="Facebook"><i className="fab fa-facebook"></i></Link>
              <Link href="https://www.linkedin.com/company/importance-leadership/posts" className="me-3" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></Link>
              <Link href="https://www.youtube.com/@importanceleadership" className="me-3" aria-label="YouTube"><i className="fab fa-youtube"></i></Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 text-center text-lg-end">
            <h5 className="fw-bold">Subscribe to Our Newsletter</h5>
            <p>Stay updated with our latest news and updates.</p>
            <form action="/api/subscribe-newsletter" method="post" className="position-relative w-100 d-flex">
              <input type="email" name="email" className="form-control me-2" placeholder="Enter your email" required />
              <button className="btn btn-primary"><i className="fas fa-paper-plane"></i></button>
            </form>
          </div>
        </div>
        <div className="text-center mt-4 border-top pt-3">
          <small>&copy; 2025 Importance Leadership. All Rights Reserved.</small>
        </div>
      </div>
    </footer>
  );
}
