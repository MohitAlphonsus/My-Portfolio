import {
	FaRegUser,
	FaRegFileLines,
	FaDiagramProject,
	FaRegAddressBook,
} from 'react-icons/fa6';

export const nav = [
	{ id: 1, icon: FaRegUser, name: 'About', toLink: '/' },
	{ id: 2, icon: FaRegFileLines, name: 'Resume', toLink: '/resume' },
	{ id: 3, icon: FaDiagramProject, name: 'Projects', toLink: '/projects' },
	{ id: 4, icon: FaRegAddressBook, name: 'Contact', toLink: '/contact' },
];
