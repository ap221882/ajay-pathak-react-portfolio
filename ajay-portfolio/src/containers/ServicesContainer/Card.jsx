import React from "react";
import { FaBeer } from "react-icons/fa";

const ICONS = {
  FaBeer,
};

const Card = ({ oneCardData }) => {
  const IconComponent = ICONS[oneCardData.icon];

  return (
    <section className='card-container' key={oneCardData.id}>
      <article className='card-icon-container'>
        <IconComponent size={38} />
      </article>
      <article className='card-info'>
        <h3>{oneCardData?.title}</h3>
        <p>{oneCardData?.info}</p>
      </article>
    </section>
  );
};

export default Card;
