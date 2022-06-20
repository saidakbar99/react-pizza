import { useState, useEffect } from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton"

export default function Home() {
    const [isLoading, setIsLoading] = useState(true)
    const [pizzas, setPizzas] = useState([])

    useEffect(() => {
        fetch('https://62b0346ee460b79df03fe4c5.mockapi.io/pizzas')
        .then((response) => response.json())
        .then((data) => {
        setPizzas(data)
        setIsLoading(false)
        })
    }, [])
    return(
        <>
            <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              isLoading 
              ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
              : pizzas.map((pizza, idx) => <PizzaBlock key={idx} {...pizza} />)
            }
            
          </div>
        </>
    )
}