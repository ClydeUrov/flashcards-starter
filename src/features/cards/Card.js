import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { selectCards } from "./cardsSlice";

export default function Card({ id }) {
  const cards = useSelector(selectCards);
  console.log("cards", cards)
  const card = cards[id];
  const [flipped, setFlipped] = useState(false);

  return (
    <li>
      <p>Card Id: {card.id}</p>
      <button className="card" onClick={(e) => setFlipped(!flipped)}>
        {flipped ? card.back : card.front}
      </button>
    </li>
  );
}
