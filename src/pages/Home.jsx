import { useState, useEffect } from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";

export default function Home({ searchValue }) {
  const [isLoading, setIsLoading] = useState(true);
  const [pizzas, setPizzas] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);
  const [chosenFilter, setChosenFilter] = useState({
    name: "популярности",
    sortProperty: "rating",
  });

  useEffect(() => {
    setIsLoading(true);

    const category = activeCategory !== 0 ? `category=${activeCategory}` : "";
    const sortBy = chosenFilter.sortProperty.replace("-", "");
    const order = chosenFilter.sortProperty.includes("-") ? "asc" : "desc";

    fetch(
      `https://62b0346ee460b79df03fe4c5.mockapi.io/pizzas?${category}&sortBy=${sortBy}&order=${order}`
    )
      .then((response) => response.json())
      .then((data) => {
        setPizzas(data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [activeCategory, chosenFilter]);

  const allPizzas = pizzas
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((pizza, idx) => <PizzaBlock key={idx} {...pizza} />);
  const skeletons = [...new Array(8)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={activeCategory}
          setActiveCategory={(i) => setActiveCategory(i)}
        />
        <Sort
          chosenFilter={chosenFilter}
          setChosenFilter={(i) => setChosenFilter(i)}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : allPizzas}</div>
    </div>
  );
}
