import { Link, useNavigate } from "react-router-dom";

// import './User.css'
const User = ({meal}) => {
    // console.log(meal)
    const {idMeal, strMealThumb, strMeal} = meal;
    const navigate = useNavigate();
    const handleShowbtn = () =>{
        navigate(`/user/${idMeal}`)
    }
    return (
        <div>
            <div className="user-container">
            <img src={strMealThumb} alt="" />
            <h2>{strMeal}</h2>
            <button onClick={handleShowbtn}>Show details</button>
            </div>
        </div>
    );
};

export default User;