import { nav } from '../constants';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

function Nav() {
	return (
		<nav className="nav">
			{nav.map(({ id, icon: Icon, name, toLink }) => (
				<NavLink key={id} className="nav__item" to={toLink}>
					<Icon />
					<span>{name}</span>
				</NavLink>
			))}
		</nav>
	);
}

export default Nav;
