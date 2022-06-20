import { Link } from "react-router-dom";

function MealsItem(props){
    const {strMeal, strMealThumb, idMeal} = props;

    return(
        <div className="card card-meal">
            <div className="card-image">
                <img src={strMealThumb} />
            </div>
            <span className="card-title cart-meal">{strMeal}</span>
            <div className="card-action">
                <Link to={`/meal/${idMeal}`} href="#">Watch recipe</Link>
            </div>
        </div>
    )
}

export {MealsItem}