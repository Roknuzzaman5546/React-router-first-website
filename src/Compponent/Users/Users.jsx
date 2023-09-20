import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {

    const users = useLoaderData();
    const {meals} = users;
    return (
        <div>
            <h2>This is User feed</h2>
            <div className="users-container">
                {
                    meals.map(meal => <User key={meal.idMeal} meal={meal}></User>)
                }
            </div>            
        </div>
    );
};

export default Users;