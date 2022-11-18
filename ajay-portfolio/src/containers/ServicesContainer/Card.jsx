import React from "react";
import { FaBeer } from "react-icons/fa";

const ICONNAMES = {
  FaBeer: "FaBeer",
};

const ICONS = {
  FaBeer,
};

const Card = ({ oneCardData }) => {
  const IconComponent = ICONS[oneCardData.icon];

  return (
    <section key={oneCardData.id}>
      <article className='card-icon-container'>
        <IconComponent />
      </article>
      <article className='card-info'>
        <h3>{oneCardData?.title}</h3>
        <p>{oneCardData?.info}</p>
      </article>
    </section>
  );
};

export default Card;
