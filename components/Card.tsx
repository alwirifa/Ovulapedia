import React from 'react'

type Props = {}

type CardProps = {
  title: string;
  description: string;
};

const Card = ({ title, description }: CardProps) => {
  return (
    <div className="p-6">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};


export default Card