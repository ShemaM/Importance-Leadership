import React from "react";
interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
}
export default function Card({ title, description, imageUrl, link }: CardProps) {
  return (
    <div className="card shadow-sm">
      {imageUrl && (
        <img src={imageUrl} className="card-img-top" alt={title} />
      )}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        {link && <a href={link} className="btn btn-primary">Learn More</a>}
      </div>
    </div>
  );
}
