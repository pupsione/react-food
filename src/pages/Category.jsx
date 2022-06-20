import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import { getFilterCategory } from "../API";
import { MealsList } from "../componets/MealsList";
import { Preloader } from "../componets/Preloader";

function Category() {
    const { name } = useParams();
    const [meals, setMeals] = useState([])
    const navigate = useNavigate();

    useEffect(function getCategory() {
        getFilterCategory(name)
            .then(data => setMeals(data.meals))
    }, [name])

    return <>
        <button className="btn btn-back" onClick={() => navigate(-1)}>Go back</button>
        {!meals.length ? <Preloader /> : <MealsList meals={meals} />}
    </>
}

export { Category }

