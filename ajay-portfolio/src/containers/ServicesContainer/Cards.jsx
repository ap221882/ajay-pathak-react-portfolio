import React from "react";
import { FaBeer } from "react-icons/fa";
import Card from "./Card";

const CardData = [
  {
    id: 1,
    icon: "FaBeer",
    title: "Ux designer",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cumque blanditiis porro aspernatur atque, inventore qui? Fugiat illum assumenda voluptatem.",
  },
  {
    id: 2,
    icon: "FaBeer",
    title: "Ux designer",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cumque blanditiis porro aspernatur atque, inventore qui? Fugiat illum assumenda voluptatem.",
  },
  {
    id: 3,
    icon: "FaBeer",
    title: "Ux designer",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cumque blanditiis porro aspernatur atque, inventore qui? Fugiat illum assumenda voluptatem.",
  },
  {
    id: 4,
    icon: "FaBeer",
    title: "Ux designer",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cumque blanditiis porro aspernatur atque, inventore qui? Fugiat illum assumenda voluptatem.",
  },
  {
    id: 5,
    icon: "FaBeer",
    title: "Ux designer",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cumque blanditiis porro aspernatur atque, inventore qui? Fugiat illum assumenda voluptatem.",
  },
  {
    id: 6,
    icon: "FaBeer",
    title: "Ux designer",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cumque blanditiis porro aspernatur atque, inventore qui? Fugiat illum assumenda voluptatem.",
  },
];

const Cards = () => {
  return (
    <>
      {CardData.map((oneCardData) => {
        return <Card key={oneCardData.id} oneCardData={oneCardData} />;
      })}
    </>
  );
};

export default Cards;
