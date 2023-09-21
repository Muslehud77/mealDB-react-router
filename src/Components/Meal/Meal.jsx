
import { useLoaderData, useNavigate } from 'react-router-dom';
import ReactPlayer from "react-player/youtube";


const Meal = () => {
  

    const navigate = useNavigate()
    const {meals} = useLoaderData()
    const m = meals
 
    const {strMeal, strCategory, strInstructions, strMealThumb, strYoutube} = m[0];
      
    

  
      const handleBack = () => {
        navigate(-1);
      }
    return (
      <div>
        <div>
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img
                src={strMealThumb}
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-5xl font-bold">{strMeal}</h1>
                <p className="py-6">{strInstructions}</p>
                <p className="font-bold py-2">Category: {strCategory}</p>
                <button onClick={handleBack} className="btn btn-primary">
                  Back to {strCategory}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-base-200 justify-center items-center -mt-5">
          <h2 className="text-3xl  font-bold bg-cyan-200 my-2 p-2 rounded-2xl">
            Tutorial
          </h2>
          <ReactPlayer controls url={strYoutube}></ReactPlayer>
        </div>
      </div>
    );
};

export default Meal;