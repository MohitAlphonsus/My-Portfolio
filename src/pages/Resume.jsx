import { resume } from '../constants';
import './Resume.scss';

function Resume() {
	return (
		<div className="resume">
			<h2 className="heading-secondary">Resume</h2>
			<h3 className="heading-tertiary">Education</h3>
			<div className="resume__education">
				{resume.education.map(({ id, timeline, stream, place }) => (
					<div className="resume__box" key={id}>
						<span>{timeline}</span>
						<h4 className="heading-quatarnary">{stream}</h4>
						<span className="body-text-sm">{place}</span>
					</div>
				))}
			</div>
			<h3 className="heading-tertiary">Tools & Skills</h3>
			<div className="resume__tools">
				{resume.tools.map(({ id, icon: Icon, name }) => (
					<div key={id} className="resume__tool">
						<Icon className="resume__tool--icon" />
						<span>{name}</span>
					</div>
				))}
			</div>
			<div className="resume__skills">
				{resume.skills.map(({ id, name }) => (
					<span key={id} className="resume__skill">
						{name}
					</span>
				))}
			</div>
		</div>
	);
}

export default Resume;
