import { Link, Outlet } from 'react-router-dom';

function Header() {
    return (
        <>
            <nav className="light-blue darken-4">
                <div className="nav-wrapper container ">
                    <a href="#" className="brand-logo">Food App</a>
                    <ul id="nav-mobile" className="right nav">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <a href='https://github.com/pupsione/react-food'>Repository</a>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </>

    )

}

export { Header };