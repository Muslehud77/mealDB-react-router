import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Categories = () => {
    const categories = useLoaderData()
    const halal = categories.categories.filter(category => category.strCategory !== 'Pork')
   
    const navigate = useNavigate()
    const handleClick = (id) => {
        navigate(`category/${id}`)
    }
    return (
      <div>
        <h1 className="text-5xl text-center font-bold my-5">Categories</h1>
        <div className="md:grid grid-cols-4 gap-5 max-w-7xl mx-auto my-10">
          {halal.map((category) => {
            return (
              <div
                key={category.idCategory}
                className="card bg-base-100 shadow-xl"
              >
                <figure>
                  <img src={category.strCategoryThumb} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {category.strCategory}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>

                  <div className="card-actions justify-end">
                    <button
                      onClick={() => handleClick(category.strCategory)}
                      className="btn btn-sm"
                    >
                      {category.strCategory} Category
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

export default Categories;