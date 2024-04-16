import profile from '../assets/profile.webp';
import {
	FaFacebookF,
	FaXTwitter,
	FaInstagram,
	FaLinkedinIn,
} from 'react-icons/fa6';
import {
	MdOutlineFileDownload,
	MdOutlinePhoneIphone,
	MdOutlineLocalPostOffice,
	MdOutlineLocationOn,
	MdOutlineCake,
} from 'react-icons/md';

export const aside = {
	profile: profile,
	name: 'Mohit Jadhav',
	profession: 'Frontend Developer',
	social: [
		{ id: 1, icon: FaFacebookF },
		{ id: 2, icon: FaXTwitter },
		{ id: 3, icon: FaInstagram },
		{ id: 4, icon: FaLinkedinIn },
	],
	main: [
		{ id: 1, icon: MdOutlinePhoneIphone, title: 'Phone', info: '9518359623' },
		{
			id: 2,
			icon: MdOutlineLocalPostOffice,
			title: 'Email',
			info: 'mohitdalphonso@gmail.com',
		},
		{
			id: 3,
			icon: MdOutlineLocationOn,
			title: 'Location',
			info: 'Shrirampur, Ahmednagar',
		},
		{ id: 4, icon: MdOutlineCake, title: 'Birthday', info: 'Dec 30, 1995' },
	],
	button: {
		icon: MdOutlineFileDownload,
		name: 'Download CV',
	},
};
