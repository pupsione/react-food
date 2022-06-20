import { Link } from 'react-router-dom';

function CategoryItem(props) {
    const {
        strCategory,
        strCategoryThumb,
        strCategoryDescription
    } = props;

    return (
        <div className="card">
            <div className="card-image">
                <img src={strCategoryThumb} />
            </div>
            <span className="card-title green">{strCategory}</span>
            <div className="card-content">

                <p>{strCategoryDescription}</p>
            </div>
            <div className="card-action">
                <Link to={`/category/${strCategory}`} href="#">This is a link</Link>
            </div>
        </div>
    )
}

export { CategoryItem }