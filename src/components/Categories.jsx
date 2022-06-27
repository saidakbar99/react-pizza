import { useState } from "react";

export default function Categories({ activeCategory, setActiveCategory }) {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((category, idx) => {
          return (
            <li
              onClick={() => setActiveCategory(idx)}
              className={activeCategory === idx ? "active" : ""}
              key={idx}
            >
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
