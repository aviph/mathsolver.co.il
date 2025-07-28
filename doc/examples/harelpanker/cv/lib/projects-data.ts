import { StaticImageData } from 'next/image';
import groundcover from '@/public/images/sites/groundcover.png';
import port from '@/public/images/sites/port.png';
import permit from '@/public/images/sites/permit.png';

export type Project = {
	name: string;
	fullUrl: string;
	showName: string;
	src?: StaticImageData;
};

export const data: Project[] = [
	{ name: 'Port', src: port, fullUrl: 'https://www.port.io/', showName: 'Port - port.io' },
	{ name: 'Permit', src: permit, fullUrl: 'https://www.permit.io/', showName: 'Permit - permit.io' },
	{
		name: 'Groundcover',
		src: groundcover,
		fullUrl: 'https://www.groundcover.com/',
		showName: 'groundcover - groundcover.com',
	},
	{ name: 'Obol', fullUrl: 'https://www.obol.app/', showName: 'Obol - obol.app' },
	{ name: 'Everafter', fullUrl: 'https://www.everafter.ai/', showName: 'Everafter - everafter.ai' },
	{ name: 'Getfabric', fullUrl: 'https://www.getfabric.com/', showName: 'Getfabric - getfabric.com' },
	{ name: 'Alta', fullUrl: 'https://www.altahq.com/', showName: 'Alta - altahq.com' },
	{ name: 'Conifers', fullUrl: 'https://www.conifers.ai/', showName: 'Conifers - conifers.ai' },
	{ name: 'Antidote', fullUrl: 'https://www.antidotehealth.com/', showName: 'Antidote - antidotehealth.com' },
	{ name: 'Lin', fullUrl: 'https://www.lin.health/', showName: 'Lin - lin.health' },
	{ name: 'Product @ Port', fullUrl: 'https://productmanagement.port.io/', showName: 'Product management @ Port' },
];
