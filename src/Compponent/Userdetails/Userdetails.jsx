import { useLoaderData, useNavigate } from "react-router-dom";

const Userdetails = () => {
    const user = useLoaderData();
    const {meals} = user;
    const nabigate = useNavigate();
    const handlback = () =>{
        nabigate('/user')
    }
    return (
        <div className="detals-container">
            {
                meals.map(meal => <div key={meal.idMeal}>
                    <h2>{meal.strMeal}</h2>
                    <img src={meal.strMealThumb} alt="" />
                    <h2>{meal.strInstructions}</h2>
                    <button onClick={handlback}>Go back</button>
                </div>)
            }
        </div>
    );
};

export default Userdetails;