import { useState } from 'react';

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(0)

  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ]

  function changeCategory(idx) {
    setActiveCategory(idx)
  }

  

  return (
    <div className="categories">
      <ul>
        {
          categories.map((category, idx) => {
            return(
              <li onClick={() => changeCategory(idx)} className={activeCategory === idx ? 'active' : ''} key={idx}>{category}</li>
            )
          })
        }
        
      </ul>
    </div>
  );
}
