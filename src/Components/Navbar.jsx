import {Link} from 'react-router-dom'

const Navbar = () => {

    return (
        <>
            <section className="navbar py-0">
                <nav className="navbar navbar-expand-lg bg-dark w-100 px-xxl-5 py-3">
                    <div className="container-fluid">
                        {/* <a className="navbar-brand text-white" href="#">MovieDb</a> */}
                        <Link className='text-white navbar-brand' to={'/'}>MovieDb</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className='text-decoration-none text-secondary mx-2' to={'/popular'}>Popular</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='text-decoration-none text-secondary mx-2' to={'/top-rated'}>Top Rated</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='text-decoration-none text-secondary mx-2' to={'/upcoming'}>Upcoming</Link>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Movie Name" aria-label="Search" />
                                <button className="btn btn-secondary" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    );
}

export default Navbar;