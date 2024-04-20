import { aside } from '../constants';
import { Button } from '../UI';
import './BriefAside.scss';

function BriefAside() {
	return (
		<aside className="aside container">
			<div
				className="aside__image"
				style={{ backgroundImage: `url(${aside.profile})` }}
			>
				&nbsp;
			</div>
			<div className="aside__content">
				<div className="aside__header">
					<h6 className="aside__header--name">{aside.name}</h6>
					<span className="aside__header--profession">{aside.profession}</span>
					<div className="aside__header--social">
						{aside.social.map(({ id, icon: Icon }) => (
							<div key={id} className="aside__header--social-icon">
								<Icon className={`aside__header--social-icon--${id}`} />
							</div>
						))}
					</div>
				</div>
				<div className="aside__main card">
					{aside.main.map(({ id, icon: Icon, title, info }) => (
						<div className="aside__group" key={id}>
							<Icon />
							<span>{title}</span>
							<span>{info}</span>
						</div>
					))}
				</div>
				<Button>Download CV</Button>
			</div>
		</aside>
	);
}

export default BriefAside;
