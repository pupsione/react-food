import { Link, Outlet } from 'react-router-dom';

function Header() {
    return (
        <>
            <nav className="light-blue darken-4">
                <div className="nav-wrapper container ">
                    <a href="#" className="brand-logo">Food page</a>
                    <ul id="nav-mobile" className="right nav">
                        <Link to="/home">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </>

    )

}

export { Header };