import React, { Component } from "react";

const Card = ({ oneCardData }) => {
  const icon = oneCardData?.id;
  // const icon = oneCardData.icon;
  console.log(icon);
  return (
    <section key={oneCardData.id}>
      <article className='card-icon-container'>{Component(icon)}</article>
      <article className='card-info'>
        <h3>{oneCardData?.title}</h3>
        <p>{oneCardData?.info}</p>
      </article>
    </section>
  );
};

export default Card;
