import React from "react";

const Card = ({ oneCardData }) => {
  return (
    <section>
      <article className='card-icon-container'>Icon</article>
      <article className='card-info'>
        <h3>{oneCardData?.title}</h3>
        <p>{oneCardData?.info}</p>
      </article>
    </section>
  );
};

export default Card;
