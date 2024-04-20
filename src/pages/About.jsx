import { about } from '../constants';
import './About.scss';

function About() {
	return (
		<div className="about">
			<h2 className="heading-secondary">About</h2>
			<p className="body-text">{about.about}</p>
			<h3 className="heading-tertiary">My Interest !</h3>
			<div className="about__interest">
				{about.interest.map(({ id, icon: Icon, title, description }) => (
					<div className="about__box card" key={id}>
						<Icon className={`about__box-icon about__box-icon--${id}`} />
						<h4 className="heading-quatarnary">{title}</h4>
						<p className="body-text">{description}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default About;
