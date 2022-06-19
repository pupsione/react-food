import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMealById } from '../API';
import { Preloader } from "../componets/Preloader";

function Recipe() {
    const { id } = useParams();
    const [recipe, setResipe] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        getMealById(id).then(data => setResipe(data.meals[0]))
    }, [id])
    return (
        <>
            <button className="btn" onClick={() => navigate(-1)}>Go back</button>
            {!recipe.idMeal ? <Preloader /> : (
                <div className="recipe container">
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                    <h1 className="recipe-name">{recipe.strMeal}</h1>
                    <h6>Category: {recipe.strCategory}</h6>
                    {recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null}
                    <p>Recipe:{recipe.strInstructions}</p>
                    <table className="centered">
                        <thead>
                            <tr>
                                <th>Ingredient</th>
                                <th>Measure</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(recipe).map((key) => {
                                    if (key.includes('Ingredient') && recipe[key]) {
                                        return (
                                            <tr key={key}>
                                                <td>{recipe[key]}</td>
                                                <td>{
                                                    recipe[`strMeasure${key.slice(13)}`]
                                                }</td>
                                            </tr>
                                        )
                                    }
                                    return null;
                                })
                            }
                        </tbody>
                    </table>
                    {
                        recipe.strYoutube ? (
                            <div className="row">
                                <h5>Video recipe</h5>
                                <iframe title={id} src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} allowFullScreen></iframe>
                            </div>
                        ) : null
                    }
                </div>
            )}
        </>
    )
}

export { Recipe }