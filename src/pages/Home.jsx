import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAllCategorys } from '../API';
import { Preloader } from '../componets/Preloader';
import { CategoryList } from '../componets/CategoryList';
import { Search } from '../componets/Search';

function Home() {
    const [catalog, setCatalog] = useState([]);
    const [filterCatalog, setFilterCatalog] = useState([])

    const { pathname, search } = useLocation();
    const navigate = useNavigate();
    console.log()

    const handleSearch = (str) => {
        setFilterCatalog(
            catalog.filter((item) => item.strCategory.toLowerCase().includes(str.toLowerCase()))
        )
        navigate({
            pathname,
            search: `?search=${str}`
        })
    }

    useEffect(function getCatalog() {
        getAllCategorys()
            .then(data => {
                setCatalog(data.categories);
                setFilterCatalog(search ? data.categories.filter(item =>
                    item.strCategory
                        .toLowerCase()
                        .includes(search.split('=')[1].toLowerCase())) : data.categories
                );
            })
    }, [search])

    return <>
        <Search cb={handleSearch} />
        {!catalog.length ? <Preloader /> : (<CategoryList catalog={filterCatalog} />)}
    </>
}

export { Home }