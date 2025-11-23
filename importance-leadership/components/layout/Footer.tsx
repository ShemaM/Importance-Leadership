import React from 'react';

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="container text-center py-4">
      <p className="mb-0">
        © {new Date().getFullYear()} Importance Leadership. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
