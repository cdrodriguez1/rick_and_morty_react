import { NavLink } from 'react-router-dom'
import "./Header.css";

export default function Header() {

    return (
        <header className='c-header'>
            <nav>
                <NavLink to="">     Home    </NavLink>
                <NavLink to="characters">     Characters     </NavLink>
                <NavLink to="contact">    Contact    </NavLink>

                {/* <Link to="">Home</Link>
                <Link to="characters">Characters</Link>
                <Link to="contact">Contact</Link> */}
            </nav>
        </header>
    )
}