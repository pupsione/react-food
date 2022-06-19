import { CategoryItem } from './CategoryItem';

function CategoryList(props) {
    const { catalog } = props;
 
    return (
            <div className="container grid">
                {catalog.map((item) => {
                    return <CategoryItem key={item.idCategory} {...item} />
                })}
            </div>
    )
}

export { CategoryList }