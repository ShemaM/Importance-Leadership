import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <button {...props} className={`btn btn-primary ${props.className || ''}`}>
    {children}
  </button>
);

export default Button;
