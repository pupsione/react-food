import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
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
            <button className="btn btn-back" onClick={() => navigate(-1)}>Go back</button>
            {!recipe.idMeal ? <Preloader /> : (
                <div className="recipe container">
                    <div className="recipe-container">
                        <img src={recipe.strMealThumb} alt={recipe.strMeal} className='img-recipe'/>
                        <div className="recipe-wrap">
                            <h1 className="recipe-name">{recipe.strMeal}</h1>
                            <Link to={`/category/${recipe.strCategory}`}>Category: {recipe.strCategory}</Link>
                            {recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null}
                            <p className="recipe-text">Recipe: {recipe.strInstructions}</p>
                        </div>
                    </div>
                    
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
                                <h5 className="video-title">Video recipe</h5>
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