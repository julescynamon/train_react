import { NavLink } from 'react-router-dom';

export default function Menu() {
    return (
        <div className="menu">
            <ul>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? 'active-link' : ''
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/add"
                        className={({ isActive }) =>
                            isActive ? 'active-link' : ''
                        }
                    >
                        Add Technos
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/list"
                        className={({ isActive }) =>
                            isActive ? 'active-link' : ''
                        }
                    >
                        All Technos
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}
