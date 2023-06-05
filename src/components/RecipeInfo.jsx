import { useState } from "react";
import { useParams } from "react-router-dom";

export function RecipeInfo() {
  const { MealId } = useParams();
  const [item, setItem] = useState();
  if (MealId != "") {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data.meals[0]);
      });
  }
  return (
    <>
      {!item ? (
        ""
      ) : (
        <>
          <div className="content">
            <img src={item.strMealThumb} />
            <div className="inner-content">
              <h1>{item.strMeal}</h1>
              <h2>{item.strArea}</h2>
              <h3>{item.strCategory}</h3>
            </div>
            <div className="recipe-details">
              <div className="ingredients">
                <h2>Ingredients</h2>
                <br/>
                <h3>
                  {item.strIngredient1}: {item.strMeasure1}
                </h3>
                <h3>
                  {item.strIngredient2}: {item.strMeasure2}
                </h3>
                <h3>
                  {item.strIngredient3}: {item.strMeasure3}
                </h3>
                <h3>
                  {item.strIngredient4}: {item.strMeasure4}
                </h3>
                <h3>
                  {item.strIngredient5}: {item.strMeasure5}
                </h3>
                <h3>
                  {item.strIngredient6}: {item.strMeasure6}
                </h3>
                <h3>
                  {item.strIngredient7}: {item.strMeasure7}
                </h3>
                <h3>
                  {item.strIngredient8}: {item.strMeasure8}
                </h3>
                <h3>
                  {item.strIngredient9}: {item.strMeasure9}
                </h3>
              </div>
              <div className="instructions">
                <h2>Instructions</h2>
                <br/>
                <h3>{item.strInstructions}</h3>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
