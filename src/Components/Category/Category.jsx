import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const Category = () => {
  const meals = useLoaderData();
console.log(meals)
  
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/meal/${id}`);
  };
  return (
    <div>
      <h1 className="text-5xl text-center font-bold my-5">Categories</h1>
      <div className="md:grid grid-cols-4 gap-5 max-w-7xl mx-auto my-10">
        {meals.meals.map((category) => {
          return (
            <div
              key={category.strMeal}
              className="card h-96 bg-base-100 shadow-xl"
            >
              <figure>
                <img src={category.strMealThumb} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {category.strMeal.slice(0, 15)}
                  <div className="badge badge-secondary">NEW</div>
                </h2>

                <div className="card-actions justify-end">
                  <button
                    onClick={() => handleClick(category.idMeal)}
                    className="btn btn-sm"
                  >
                    Recipe
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
