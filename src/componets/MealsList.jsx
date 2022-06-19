import { MealsItem } from "./MealsItem"

function MealsList(props) {
    const { meals = [] } = props;
    console.log(meals)

    return (
        <div className="container grid">
            {
                meals.map((item) => {
                    return <MealsItem key={item.idMeal} {...item} />
                })
            }
        </div>
    )
}

export { MealsList }