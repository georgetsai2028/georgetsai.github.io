import {Link} from react-router-dom
import './NavBar.css'

export default function NavBar(){
    return(
        <nav className="nav">
            <ul>
                <li>
                    <a href='/'>about Me</a>
                <li>
                <li>
                    <a href='/experience'>experience</a>
                </li>
                </li>
                    <a href='/projects'>projects</a>
                </li>
                <li>
                    <a href='/resume'>resume</a>
                </li>
            </ul>

        </nav>
    )
}